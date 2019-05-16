import sys
from flask import escape
from gensim.summarization import summarize
import requests
import json


def read_article(file_json):
    article = ''
    filedata = json.dumps(file_json)
    if len(filedata) < 100000:
        article = filedata
    return article

def generate_summary(request):
    
    request_json = request.get_json(silent=True)
    sentences =  read_article(request_json)

    summary = summarize(sentences, ratio=0.3)
    summary_list = summary.split('.')
    for i, v in enumerate(summary_list):
        summary_list[i] = v.strip() + '.'
    summary_list.remove('.')

    return json.dumps(summary_list)