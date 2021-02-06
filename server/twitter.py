'''
twitter.py: Uses the Twitter API to retrieve a given stock, and retunrns two sorted arrays pos and neg with the top 5 positive and
negative sentiment scores (sorted by sentiment). retrieve_tweets is the main function to be called.
return: pos, neg: [[username, nickname, date, content, retweet_count, favorite_count, profile_pic_url]]
'''

# twitter API
import os
import tweepy as tw
# Imports the Google Cloud client library
from google.cloud import language_v1

# Instantiates a client
client = language_v1.LanguageServiceClient()

# Twitter API Authentication Steps
auth = tw.OAuthHandler("wFJKLMVIB4imf9tSKjV1kU0k5", "qBReRvjwM8kP3WfB2NoEvFTKcyOS6I7Gy6FnopVdmDmFvUHURs")
auth.set_access_token("1358055137462210565-KjCCjHFJ8zM985f7jEBUchqaLmqezW", "JjlIrB920JYPuk01U0OpIK0BbiRM5amkVGNSEI5tHovm4")
api = tw.API(auth, wait_on_rate_limit=True)

# analyzes the tweet's content and returns a float from -1 to 1 (sentiment score)
def sentiment_score(text):
    document = language_v1.Document(content=text, type_=language_v1.Document.Type.PLAIN_TEXT)

    # Detects the sentiment of the text
    sentiment = client.analyze_sentiment(request={'document': document}).document_sentiment

    # print("Text: {}".format(text))
    # print("Sentiment: " + str(sentiment.score))
    return sentiment.score

# main function to be called. Returns two lists pos and neg with the top 5 positive and negative tweets and its properties.
# input should be ABC, not #ABC or $ABC. The search uses the $ filter only.
def retrieve_tweets(stock_name):
    # UNCOMMENT IF you want search words to also include # and plain "ABC". make sure to comment out line 37
    search_words = "$" + stock_name + " OR " + "#" +  stock_name + " OR " + stock_name + " -filter:retweets"
    # search_words = "$" + stock_name + " -filter:retweets"
    date_since = "2021-01-31"
    tweets = tw.Cursor(api.search,
              q=search_words,
              result_type='popular',
              tweet_mode='extended',
              lang="en",
              since=date_since
              ).items()

    tweets_arr = []
    month = ""
    day = ""
    hour = 0
    minute = ""
    ampm = ""

    for tweet in tweets:
        # month
        if tweet.created_at.month == 1:
            month = "January"
        else:
            month = "February"

        # day
        day = tweet.created_at.day

        # time
        if tweet.created_at.hour == 0:
            ampm = "AM"
            hour = 12
        elif tweet.created_at.hour > 12:
            ampm = "PM"
            hour = tweet.created_at.hour - 12
        else:
            ampm = "AM"
            hour = tweet.created_at.hour
        if tweet.created_at.minute < 10:
            minute = "0" + str(tweet.created_at.minute)
        else:
            minute = str(tweet.created_at.minute)

        date = str(month) + " " + str(day) + ", 2021 @ " + str(hour) + ":" + str(minute) + " " + ampm

        tweets_arr.append([tweet.user.name, tweet.user.screen_name, date, tweet.full_text, tweet.retweet_count, 
            tweet.favorite_count, tweet.user.profile_image_url_https, sentiment_score(tweet.full_text)])

    tweets_arr.sort(key=lambda x: x[-1])

    neg = []
    pos = []
    neg_counter = 0
    pos_counter = -1

    while neg_counter < 5 and tweets_arr[neg_counter][-1] < -0.3:
        neg.append(tweets_arr[neg_counter][0:7])
        neg_counter += 1

    while pos_counter > -6 and tweets_arr[pos_counter][-1] > 0.3:
        pos.append(tweets_arr[pos_counter][0:7])
        pos_counter -= 1
     
    # print("Positive Tweets")
    # for p in pos:
    #     print(p)

    # print("\nNegative Tweets")
    # for n in neg:
    #     print(n)


    return pos, neg


def main():
    retrieve_tweets("VTI")


if __name__ == '__main__':
    main()
