# C:\Users\duhui\AppData\Local\atom\app-1.21.2\resources\app\apm\bin\apm
##################################################################################
# Python的内存管理是由私有heap空间管理的
# 所有的Python对象和数据结构都在一个私有heap中.程序员没有访问该heap的权限,只有解释器才能对它进行操作
# Python的内存管理模块为Python的heap空间分配内存.其核心API提供一些访问该模块的方法供程序员使用
# Python的垃圾回收: 1.引用计数 2.标记清除 3.分代回收

##################################################################################
# Django: 大而全, 模板引擎运算慢
# Flask: 小而少, 模板引擎运算快

##################################################################################
# PyChecker是一个静态分析工具,它报告源代码中的错误并且会报告错误类型和复杂度
# Pylint是检验模块是否达到代码标准的另一个工具

##################################################################################
# -*- coding:utf-8 -*- #兼容特殊字符集, python2.x
# python3.x默认使用utf-8编码(支持特殊字符集)
# python3.x比python2.x慢, 主要慢在字符串和整数操作上
# ord('a') #字符转换为数字
# chr(97) #数字转换为字符
# 'a' < 'c' #字符直接比较
# list(('sdgfdfgn')) #将字符串转换为单个字符数组, 不能用str.split('')

##################################################################################
# 计算顺序: +|-|*|/ > and|or|not|== > =
# 5/2=2.5(python2.x=2) | 5.0/2=2.5 | 5//2=2 | 5.0//2.0=2.0 | 5.0//2=2.0
# is是对比地址, ==是对比值
# a, b = i, j #集中赋值(a, b = b, a #数值互换)
# x ** n #x的n次方
# 短路运算:
#   None|False|'' or 123 => 123  None|False|'' and 123 => None|False|''
#   1|True|'a' or 123 => 1|True|'a'  1|True|'a' and 123 => 123
# any(i % 3 == 0 for i in data_list) #判断data_list是否包含3的倍数, 返回True/False
# 2 ** 16 => 65536 | 0xFFFF = 2 ** 16 - 1
# 1111 1111 = 2 ** 8 - 1 | 0.1111 1111 = 1 - 2 ** -8

##################################################################################
# monkey patch #在运行时动态地对已定义的函数或对象进行修改或添加
# os.system("ps -ef | grep xxx") #执行shell脚本
# sys.exit() #退出运行环境
# sys.getsizeof(arg) #获取变量所占内存大小
# 遇到权限问题, 尝试sudo python xxx.py
# import logging
# logging.basicConfig(level = logging.INFO)
# logging.info('xxx xxx') #调试程序, 记录信息

##################################################################################
# def func(*args, **kwargs) #*args为可变数目参数, **kwargs为任意内容字典型参数
#   eg: func(1, 2, 3, a = 'xxx', b = 'yyy', c = 'zzz')
# 每个函数都有一个__name__属性, 即函数签名
# 主函数签名为__main__
# pass是为了防止报错而占位, 本身没有意义

##################################################################################
# isinstance(a, type_name) #a是否为某类型实例, 对整个继承链的类都有效
# type(a) #获取a的类型信息
# dir(a) #获取a的所有属性和方法, 返回一个list
# hasattr(a, 'xxx'), setattr(a, 'xxx', val), getattr(a, 'xxx') #属性操作

##################################################################################
# 类是一个对象
# class是运行时由type()动态创建的, 每个class都是type类的一个对象
# class的类型是type, 类实例的类型是类名(type(xxx))
# 在类中不在self中的属性是类字段, 类的所有实例都能访问, 但只有类才能修改其值
# 创建一个类时, python会将该类所有属性收集到一个字典dict中
# python多继承链: super(Parent, self): #mro序列->拓扑排序
# metaclass的意义在于对类属性字典的操作(数据库读写, orm框架)
##################################################################################
# @property #为了使对类属性的操作可控, 可以检查参数
# 添加了@property的函数可以添加@func_name.setter方法以设置属性值,没添加setter方法的@property函数为只读属性,只有getter方法(@property)
# 添加了@classmethod的函数的第一个参数总是该函数所在类的类名
##################################################################################
# self.__class__ == class_of_self
# self._abc #类的保护变量, 只允许类本身和子类访问, 'from...import...'不能访问
# self.__abc #类的私有变量, 只允许类本身访问
# self.__abc__ #类的特殊变量, 可以被外部直接访问
# self代表类的实例, 而非类
# python3.x:__next__(), python2.x: next()
# python类属性默认用dict存储,__slots__是用list存储属性名,而不会再使用dict,__slots__里没有的属性,类实例不能随便添加.节省了内存, 限制了属性添加

##################################################################################
# 数组(list)和元组(tuple)之间的区别是数组内容是可以被修改的而元组内容是只读的.元组可以被哈希比如作为字典的关键字
# list(dict.keys()), list(dict.values()), list(dict.items()) #字典对象操作
# dict.clear() #dict => {}
##################################################################################
# nums = [i for i in data_list if i % 3 == 0] #列表推导式(list comprehension)
# dict = {i: i ** n for i in data_list if i > 0} #字典推导式(dict comprehension)
# [d for d in dict] #return keys of dict
# [dict[key] for key in dict] #return values of dict
##################################################################################
# zip((1, 2, 3), ('a', 'b', 'c')) = [(1, 'a'), (2, 'b'), (3, 'c')]
# dict([(1, 'a'), (2, 'b'), (3, 'c')]) = {1: 'a', 2: 'b', 3: 'c'}
# dict([('a', 1), ('b', 2), ('c', 3), ('d', 4), ('e', 5), ('f', 6)]) =
#       {'a': 1, 'c': 3, 'b': 2, 'e': 5, 'd': 4, 'f': 6} #python2.x
# dict(data_list)在python3.x中有序, 在python2.x中无序
# dc={'a': 1, 'b': 2, 'c': 3} #'a' in dc (True) | 1 in dc (False)
##################################################################################
# ['a'] * 5 = ['a', 'a', 'a', 'a', 'a']
# l=[[]] * 5  l.append(10) => l=[[], [], [], [], [], 10]
# l=[[]] * 5  l[0|1|2|3|4].append(10) => l=[[10], [10], [10], [10], [10]] # *效应
# l=[[]] * 5  l[0|1|2|3|4].append(10) l[0|1|2|3|4].append(20) => l = [[10, 20], [10, 20], [10, 20], [10, 20], [10, 20]] # *效应
# l=[[], [], [], [], []]  l[0].append(10) => l = [[10], [], [], [], []] #普通
# data_list[::n] #每隔n-1个数对data_list进行切片
##################################################################################
# data_list[::-1] #对data_list按原序倒序排列, 不改变列表本身
# data_list.sort() #正序排序, 改变列表本身, 返回值为None
# data_list.reverse() #倒序排序, 改变列表本身, 返回值为None
# sorted(data_list, key = lambda x: x.name reverse = True) #按key排序, 不改变列表本身, 返回值为排序后列表

##################################################################################
# lambda x: x ** n #匿名函数(lambda), x为参数
# lambda没有语句的原因是它被用于在代码被执行的时候构建并返回新的函数对象
# list(map_list) #将map, filter返回值转换为list类型
##################################################################################
# from functools import reduce
# num = reduce(lambda i, j: i + j, filter(lambda n: n < 0, data_list)) #函数式编程
##################################################################################
# 生成匿名函数对象列表:
#   def fl():
#       for i in range(4): yield lambda x : i * x #1.generator
#       return [lambda x, i=i: i*x for i in range(4)] #2.i=i闭包,在for之后延迟绑定
#   print([f(2) for f in fl()])
##################################################################################
# _add()返回一个匿名函数对象, _add()(n)为执行匿名函数:
#   def _add():
#       return lambda x: x + 3

##################################################################################
# python3.x:range(m, n)生成一个range对象, list(range(m, n))生成list; xrange去除
# python2.x:range(m, n)生成一个list对象; xrange(m, n)生成一个生成器(generator)
# 生成器每次迭代只生成一个数, 只占用一份内存空间, 随后中断进行下次迭代
# list: [x for x in range(n)] | generator: (x for x in range(n))
# 包含yield关键字的函数是一个generator

##################################################################################
# 进程fd: 进程文件描述符
# GIL: Global Interpreter Lock,全局解释器锁,解释器执行代码时,任何Python线程执行前,必须先获得GIL锁,然后,每执行100条字节码,解释器就自动释放GIL锁,让别的线程有机会执行.这个GIL全局锁实际上把所有线程的执行代码都给上了锁,所以,多线程在Python中只能交替执行,即使100个线程跑在100核CPU上,也只能用到1个核,在官方解释器上不能利用多核实现真正的多线程
# 多线程模式一旦线程数目过多, CPU切换线程的开销也会很大
# 多线程模式致命的缺点就是任何一个线程挂掉都可能直接造成整个进程崩溃,因为所有线程共享进程的内存
##################################################################################
# 同步IO: 在一个线程中,CPU执行代码的速度极快,一旦遇到IO操作,如读写文件,发送网络数据时,就需要等待IO操作完成,才能继续进行下一步操作:
#   do_some_code()
#   f = open('/path/to/file', 'r')
#   r = f.read() # <== 线程停在此处等待IO操作结果
#   # IO操作完成后线程才能继续执行:
#   do_some_code(r)
# 异步IO: 当代码需要执行一个耗时的IO操作时,它只发出IO指令,并不等待IO结果,然后就去执行其他代码了.一段时间后,当IO返回结果时,再通知CPU进行处理
# 异步IO模型需要一个消息循环,在消息循环中,主线程不断地重复"读取消息-处理消息"这一过程:(消息模型)
#   loop = get_event_loop() #事件队列
#   while True:
#       event = loop.get_event()
#       process_event(event) #发送消息
##################################################################################
# 协程(Corotine): 事件驱动单线程的异步编程模型, 没有切换开销, 无需锁机制
# Python对协程的支持是通过generator实现的
# 在generator中, 我们不但可以通过for循环来迭代, 还可以不断调用next()函数获取由yield语句返回的下一个值或接收调用者发出的参数
# 多进程+协程, 既充分利用多核, 又充分发挥协程的高效率, 可获得极高的性能
##################################################################################
# epoll fd: socket 描述符
# epoll: epoll_create(epoll instance) => epoll_ctl(create RB-Tree & Ready-List for socket on epoll instance) => epoll_ctl(insert socket into RB-Tree and register callback-function on kernel) => data sent to a socket => kernel(execute callback-function, set the socket readable/writeable/etc. and insert it into Event-List) => epoll_wait(get socket from Event-List and send socket to User-State and read/write/etc. data on socket)

##################################################################################
# 正则表达式中?表示尽可能少地匹配(非贪婪匹配)

##################################################################################
# 数据库增删改操作必须有: db.commit()

##################################################################################
# open('new.txt', '[w|a][+|b[+]]') #创建一个新文件
# read 读取整个文件
# readline 读取下一行,使用生成器方法
# readlines 读取整个文件到一个迭代器以供我们遍历

##################################################################################
# RESTful架构:
#   1.每一个URI代表一种资源
#   2.客户端和服务器之间, 传递这种资源的某种表现层
#   3.客户端通过四个HTTP动词, 对服务器端资源进行操作, 实现"表现层状态转化"
#   4.目的是简化http操作, 使网站软件化, 防止跨站攻击
##################################################################################
# GET和POST只有一点根本区别, GET用于获取数据, POST用于修改数据
##################################################################################
# 中间人攻击: 把目标计算机放在两台计算机中间, 劫持信息
#   解决: https(由SSL(安全套接层)进行网站身份验证和加密传输数据)
#       https原理: 客户端与服务器端握手交换对称密钥, 接下来传输加密信息
#       https协议需要到ca申请证书,一般免费证书很少,需要交费
#       http是超文本传输协议,信息是明文传输,https 则是具有安全性的ssl加密传输协议
#       http和https使用的是完全不同的连接方式,用的端口也不一样,前者是80,后者是443
#       http的连接很简单,是无状态的;HTTPS协议是由SSL+HTTP协议构建的可进行加密传输,身份认证的网络协议,比http协议安全
##################################################################################
# 跨站攻击:
#   脚本注入(js死循环 | js生成隐藏iframe, 用表单将用户输入发送到ifr.src所指服务器)
#       解决:用户输入html转义(import cgi cgi.escape('<script>') => &lt;script&gt;)
#   伪造请求(在请求中插入恶意参数, 破坏服务器)
#       解决:提高攻击的门槛
#           RESTful API:
#               对发帖等创建资源的操作,应该只接受POST请求,而GET请求应该只浏览而不改变服务器端资源,这样攻击者就不能通过发布链接来伪造请求
#           请求令牌(服务器端验证过一定记得销毁):
#               服务器生成随机令牌(random string-token in Session),在发出请求的页面,把该令牌以隐藏域与其他信息一并发出.在接收请求的页面,把接收到的令牌与Session中的令牌比较,只有一致的时候才处理请求,否则返回403拒绝请求或者要求用户重新登陆验证身份
#           验证码(服务器端验证过一定记得销毁):
#               ###################
#               需要手动输入, 用户体验差
##################################################################################
# 网站密码加密:
#   1.md5(key)
#   2.md5(md5(key) + salt) #salt = substr(uniqid(rand()), -6)

##################################################################################
# 时间:
# import datetime
# dt = datetime.datetime.strptime('2017-10-13 10:10:10', '%Y-%m-%d %H:%M:%S')
# now = datetime.datetime.now()
# now.strftime('%Y-%m-%d %H:%M:%S')
# >>>>  2017-10-13 10:10:10

##################################################################################
# import copy
# t = ['abc', [123]]
# t1 = copy.copy(t) | t.copy()(if t is list|dict) #new obj, share nested obj
# t2 = copy.deepcopy(t) #absolutely new obj
# print(t1 == t) #True
# print(t1 is t) #False
# print(t1[1] is t[1])#True, share nested obj: ([[123]] | {key: [123]})
# print(t2[1] is t[1])#False, absolutely new obj
# t3 = t #new ref, same obj
# print(t3 == t) #True
# print(t3 is t) #True

##################################################################################
# 装饰器(decorator)通过@function_name, 可以扩展现有函数功能(安全, 追踪, 锁定)
# 一个完整的装饰器实例:
#   ##################

##################################################################################
# 测试框架: pytest(pytest -v #启动'test_'开头的function,module,'Test'开头的class)
# 单元测试:
# import unittest
# class XXXTest(unittest.TestCase):
#     def setUp(self):
#         pass
#     def test_ok(self):
#         self.assertEqual(a, b) #if a == b
#     def test_ok1(self):
#         self.assertTrue(if_true) #if if_true
# if __name__ == '__main__':
#     unittest.main()

##################################################################################
# 控制反转 -> (Inversion of Control,缩写为IoC),是面向对象编程中的一种设计原则
# 用来降低代码之间的耦合度
# 最常见的方式是依赖注入(Dependency Injection,简称DI)
# 还有一种方式是依赖查找(Dependency Lookup)
# 通过控制反转,对象在被创建的时候,由一个调控系统内所有对象的外界实体
# 将其所依赖的对象的引用传递给它.也可以说,依赖被注入到对象中

data_list = [-1, 31, 65, -4, 72, 91, 10, 23, 58, -45]

class Parent:
    address = 'Tokyo' #类属性
    def __init__(self, name=''):
        self._name = name #实例属性
        self.id = 'am579'

    @property
    def nm(self):
        return self._name

class Child(Parent):
    address = 'Kyoto'
    pass

#__main__
p = Parent()
# print(p.name)
c1 = Child('Bruce')
c2 = Child('Robin')
# print(c.name)
# c.say()
# Parent.curse()
# print('%s is Batman, not %s.' % (c1.nm, c2.nm))
# print(Parent.address, p.address, Child.address, c1.address, c2.address)
# print(p.id, c1.id, c2.id)
print(int('0xFFFF', 16))``
