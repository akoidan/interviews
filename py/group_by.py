import asyncio
import pickle
import array
a = array.array('i', [1, 2, 3])
b = 3
# Creating a sample object to pickle
data = {
    'name': 'Alice',
    'age': 30,
    'city': 'Wonderland'
}


class A:
    b = 3
    def lol(self):
        return 4


MyClass = type('MyClass23', (object,), {'x': 5})
a = None
b = None
if b == None:
    print(3)
y = [1,2,3]
print(x == y)
print( x is y)
a = A()
a.lol()
class MyMetaFactory(type):
    def __new__(cls, name, bases, attrs, **kwargs):
        attrs['x'] = 10
        return A()


class B(metaclass=MyMetaFactory):
    pass

b = B()
print(b.lol())


class MyClass:
    def print_me(self):
        print('wtf')
    c = 4
a = MyClass()
a.__delattr__()
obj = MyClass()
obj.print_me()
# print(obj.__private_attr)  # Raises AttributeError
print(obj._MyClass__private_attr)  # Accessible due to name mangling

class MyIterator:
    def __iter__(self):
        self.i = 0
        return self

    def __next__(self):
        if self.i > 10:
            raise StopIteration()
        self.i += 1
        return self.i

iter = MyIterator()
for a in iter:
    print(a)
# Serialize the object and save it to a file
with open('data.pkl', 'wb') as file:
    pickle.dump(data, file)

# Deserialize the object from the file
with open('data.pkl', 'rb') as file:
    loaded_data = pickle.load(file)

print("Loaded data:", loaded_data)

def a():
   global b
   b = 4

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers[-2:])  #output : [2, 4, 6, 8, 10]
res = sorted(numbers, key=lambda x : -x)
print(f"b={range(0,10)}")
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


async def async_foo(*args, **kwargs):
  print("async_foo started")
  asyncio.sleep(5)
  print("async_foo done")
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