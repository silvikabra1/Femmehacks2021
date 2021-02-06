import requests
import json

API_KEY = 'QH8OFXHWXHHFLM3K'


def get_overview(ticker):
    dict = {}
    r = requests.get(
        'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + ticker + '&apikey=' + API_KEY)
    if (r.status_code == 200):
        result = r.json()
        dict['symbol'] = ticker
        dict['pe_ratio'] = result['PERatio']
        dict['52_high'] = result['52WeekHigh']
        dict['52_low'] = result['52WeekLow']
        dict['sector'] = result['Sector']
        dict['industry'] = result['Industry']
        dict['name'] = result['Name']
        dict['market_cap'] = result['MarketCapitalization']
        return dict
    else:
        return "INVALID status code"


def get_daily(ticker):
    daily_dict = {}
    r = requests.get(
        'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&outputsize=compact&symbol=' + ticker + '&apikey=' + API_KEY)
    if (r.status_code == 200):
        result = r.json()
        # print(result)
        times = [result['Time Series (Daily)'][x]
                 for x in result['Time Series (Daily)']]

        daily_dict['open'] = times[0]['1. open']
        daily_dict['high'] = times[0]['2. high']
        daily_dict['low'] = times[0]['3. low']
        daily_dict['close'] = times[0]['4. close']
        daily_dict['volume'] = times[0]['6. volume']
        return daily_dict
    else:
        return "INVALID status code"


#dict_result = get_daily('MSFT')
# print(dict_result)
