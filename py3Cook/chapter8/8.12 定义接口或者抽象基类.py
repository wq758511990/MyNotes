from abc import ABCMeta, abstractmethod

# staticmethod 可以在实例化之前调用
# 不要和abstractmethod 弄混了
class IStream(metaclass=ABCMeta): 
    @abstractmethod
    def read(self, maxbytes=-1):
        pass

    @abstractmethod
    def write(self, data):
        pass

# s = IStream() # Can't instantiate abstract class IStream with abstract methods read, write

# 抽象类的目的就是让别的类继承它并实现特定的抽象方法：
class SocketStream(IStream) :
    def read(self, maxbytes = -1) :
        pass

    def write(self, data) :
        pass


