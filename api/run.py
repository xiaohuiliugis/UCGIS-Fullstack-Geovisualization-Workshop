import generating_setting
from pymongo import MongoClient

from eve import Eve

def startREST(databaseName, portNum):
    generating_setting.generateSettingFile(databaseName)
    app = Eve(settings='setting.py')
    app.run(port=portNum)

if __name__ == '__main__':
    startREST("[insert your database name]", 13579)