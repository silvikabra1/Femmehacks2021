'''
twitter.py: Uses the Twitter API to retrieve a given stock, and the top most recent tweets in x days
input: str stock_name
return: [(tweet_str, like_count, retweet_count)]
'''
# twitter API
import os
import tweepy as tw

# Authentication Steps
auth = tw.OAuthHandler("wFJKLMVIB4imf9tSKjV1kU0k5", "qBReRvjwM8kP3WfB2NoEvFTKcyOS6I7Gy6FnopVdmDmFvUHURs")
auth.set_access_token("1358055137462210565-KjCCjHFJ8zM985f7jEBUchqaLmqezW", "JjlIrB920JYPuk01U0OpIK0BbiRM5amkVGNSEI5tHovm4")
api = tw.API(auth, wait_on_rate_limit=True)


def retrieve_tweets(stock_name):
    search_words = "$" + stock_name + " -filter:retweets"
    date_since = "2021-01-31"
    # tweets = api.search(q=search_words, result_type='popular')
    tweets = tw.Cursor(api.search,
              q=search_words,
              result_type='popular',
              tweet_mode='extended',
              lang="en",
              since=date_since
              ).items()
    
    ''' username, nickname, date, content, retweet_count, favorite_count, profile_pic_url, pos_sentiment, neg_sentimentr'''
    pos = []
    neg = []
    month = ""
    day = ""
    hour = 0
    minute = ""
    ampm = ""

    for tweet in tweets:
        pos = calculate_pos_sentiment(tweet.full_text)
        neg = calculate_neg_sentiment(tweet.full_text)

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

        ret.append([tweet.user.name, tweet.user.screen_name, date, tweet.full_text, tweet.retweet_count, 
            tweet.favorite_count, tweet.user.profile_image_url_https, pos, neg])
    
    for val in pos:
        print(val)

    return pos, neg


def main():
    retrieve_tweets("GME")


if __name__ == '__main__':
    main()
