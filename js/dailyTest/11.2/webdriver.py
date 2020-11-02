from selenium import webdriver
import time

chrome_path = "C:/Users/admin/AppData/Local/Google/Chrome/Application/chrome.exe"
driver = webdriver.Chrome(executable_path=chrome_path)
driver.get('https://www.baidu.com')
