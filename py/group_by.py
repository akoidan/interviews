import asyncio


# car = {
#   "brand": "Ford",
#   "year": 1964,
#   "model": ['a']
# }
#
# car.setdefault("model", ['b']).append('c')
#
#
#
# x= {i : i+2 for i in range(5)}
# s = {2,3,4}
#
# b = [a for a in range(0,8)]
# k = b[-1:]
# print(k)


# async def async_foo():
#   print("async_foo started")
#   asyncio.sleep(5)
#   print("async_foo done")
#
#   def simpleGeneratorFun():
#     yield 1
#     yield 2
#     yield 3


# Driver code to check above generator function
def simpleGeneratorFun():
    print('1')
    yield 1
    yield 2
    print('3')
    yield 3


# Driver code to check above generator function
a = simpleGeneratorFun()
for c in a:
    print(c)