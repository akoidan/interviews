# Write a Python program that takes a list of URLs pointing to plain-text content
# and counts the number of words in the content of each URL.
# The implementation should respect remote resources by limiting the number
# of concurrent network requests to a reasonable number (e.g., no more than 5 at a time).
# Your code should be efficient and able to handle a large list of URLs.
# 1. For each URL:
#   - Fetch the content via HTTP.
#   - Count the number of words (split by whitespace).
#   - If the URL cannot be fetched or processed, skip it gracefully.
# 2. You must implement bounded concurrency aka limit the number of simultaneous requests being made.
# 3. You may implement this using either:
#   - Asynchronous I/O (asyncio, aiohttp, etc.), or
#   - Multithreading or multiprocessing with the concurrent.futures module.

# Return a dictionary mapping each successfully fetched URL to its word count.


from concurrent.futures.thread import ThreadPoolExecutor
import requests

def count_words_from_urls(urls: list[str], max_concurrent: int = 5) -> dict[str, int]:
  res = {}
  def cb(url: str):
    response = requests.get(url)
    if response.ok:
      words = response.text.split(' ')
      res[url] = len(words)
  with ThreadPoolExecutor(max_workers=max_concurrent) as executor:
    results = []
    for url in urls:
      future = executor.submit(cb, url)
      results.append(future)
    for a in results:
      a.result()
  return res


def main():
  print(
    count_words_from_urls([
      "https://sample-files.com/downloads/documents/txt/long-doc.txt",
      "https://sample-files.com/downloads/documents/txt/simple.txt"
    ])
  )


my_dict = {"b": 2, "a": 1,  "c": 3}
print(my_dict)
# main()