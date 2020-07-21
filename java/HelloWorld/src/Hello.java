import java.util.Arrays;

public class Hello {
	public static void main(String[] args) {
//		args 可以拿到命令行参数

//		System.out.println("hello world");
//		int x = 100;
//		System.out.println(x);

//        int i = 2147483647;
//        int i2 = -2147483648;
//        int i3 = 2_000_000_000; // 加下划线更容易识别
//        int i4 = 0xff0000; // 十六进制表示的16711680
//        int i5 = 0b1000000000; // 二进制表示的512
//        long l = 9000000000000000000L; // long型的结尾需要加L
//        
//        int x = 2147483640;
//        int y = 15;
//        int z = x + y;
//        System.out.println(z);

//		double x = 1.0 / 10;
//		double y = 1 - 9.0 / 10;
//		System.out.println(x);
//		System.out.println(y);
//
//		double r = Math.abs(x - y);
//		if (x - y < 0.000001) {
//			System.out.println("ok");
//		} else {
//			System.out.println("wrong");
//		}
//		System.out.println(11 / 5);
//		System.out.println(5 < 3);
//		System.out.println("123" + " " + "456");
//
//		String string = "select * from user where id ";
//
//		String s = "hello";
//		String t = s; // t开辟了一个新的地址指向了s
//		s = "world"; // s又开辟了一个新的空间用来存储"world"
//		System.out.println(t);
//		System.out.println("s" + " " + s);
//		
//		int a = 'A';
//		char b = '\u0065';
//		System.out.println(a);
//		System.out.println(b);

//		数组类型
//		注意数组是引用类型，并且数组大小不可变
//		int[] ns = new int[5];
//		ns[0] = 1;
//		System.out.println(ns);

//		输入输出
//		double d = 3.1415926;
//		System.out.printf("%.2f\n", d);

//		switch多重选择
//		int x = 1;
//		switch (x) {
//		case 1: System.out.println("ok"); break;
//		default: System.out.println("fck");
//		}

//		while 循环
//		int n = 10;
//		while(n > 0) {
//			n -= 1;
//			System.out.println(n);
//		}

//		for循环
//		for(int i = 0; i < 10; i++) {
//			System.out.println(i);
//		}

//		拿到数组中每个值
//		int[] ns = {1, 3, 2};
//		for(int n: ns) {
//			System.out.println(n);
//		}
//		Arrays.sort(ns);
//		System.out.println(Arrays.toString(ns));

//		二维数组
		int[][] ns = { { 1, 2, 3, 4 }, { 2, 3, 4, 5 } };
		System.out.println(Arrays.deepToString(ns));

		Person ming = new Person();
		ming.setName("xiaobai"); // 对字段name赋值
		ming.setAge(15); // 对字段age赋值
		System.out.println(ming.getAge() + " " + ming.getName());
		
//		可变参数
		Group myGroup = new Group();
		myGroup.setNames("123", "321", "213");
		String names = Arrays.deepToString(myGroup.getNames());
		System.out.println(names);
		
		
//		基本类型参数的传递，是调用方值的复制。双方各自的后续修改，互不影响
//		引用类型参数的传递，调用方的变量，和接收方的参数变量，指向的是同一个对象。双方任意一方对这个对象的修改，
//		都会影响对方（因为指向同一个对象嘛）。
		
		
	}

}

class Person {
	// 可以在这里直接对字段赋值 
	private String name; // private 字段有访问限制 
	private int age;
//	任何构造函数都有构造方法，我们没有定义的话java会默认给我们定义一个如下的构造方法
	
	public Person() {
		// 默认的构造方法
		// new Person() 传入的参数就可以在这里接收到
		
		// 一个构造方法可以调用另一个构造方法，比如在这里可以用
		this("xiaobai", 13); // 可以这样调用另一个构造方法
	}
//	若既想要默认的又想要可以传参的，则把两个都写出来
	public Person(String name, int age) {
		// 操作
	}
	
	public String getName() {
//		this变量指向当前实例
		return this.name;
	}

	public int getAge() {
		return this.age;
	}

	public void setName(String name) {
		if(name == null) {
			throw new IllegalArgumentException("invalid name"); 
		}
		this.name = name;
	}

	public void setAge(int age) {
		this.age = age;
	}
}

class Group {
	private String[] names;
	
	public void setNames(String... names) {
		this.names = names;
	}
	
	public String[] getNames() {
		return this.names;
	}
}

// 任何类都继承自Object， Object是任何类的上级类
class Person1 {
	protected String name;
	protected int age;
//	这里用protected 定义变量类型，可以让子类能够访问到它
}

// 这是因为在Java中，任何class的构造方法，第一行语句必须是调用父类的构造方法。如果没有明确地调用父类的构造方法，
// 编译器会帮我们自动加一句super();
class Student extends Person1 {
	public Student() {
		// 如果没有加super(), 编译器会自动添加
		// 但是要注意父类中构造方法是否有参数，如果有的话就要手动添加，比如super("xiaoming", 13)
		// 保险起见都手动写上super()即可;
	}
	
	public void Hello() {
		System.out.println("hello" + this.name);
	}
}

// 向上转型
// 类似如下代码
// Person s = new Student()
// Student继承自Person， 这样往往是可以的，因为Person功能比Student少，Person兼容Student

// 反之则成为向下转型，类似
// Student s = new Person() 
// 往往是会报错的，因为子类功能往往比父类多，无法兼容。

// 正常来讲是什么类型就用什么类型即可


// 多态， 子类重写父类方法
class Person2 {
	// 如果该方法不允许子类覆写， 则加上一个final即可
	// 例如 public final void run() {} 这样
//	对于一个类的实例字段，同样可以用final修饰。用final修饰的字段在初始化后不能被修改。例如：
	
	public final String name;
	
	public Person2() {
		// 初始化name
		this.name = "123";
	}

	public void run() {
//		this.name = "321"; 初始化之后再对final 字段赋值则会报错
		System.out.println("person_run");
	}
}

class Student1 extends Person2 {
	@Override
	public void run() {
		// 这里可以使用super.run() 调用父类的该方法(应该不仅仅局限于覆写方法，子类方法需要调用父类的方法都可以这样)
		System.out.println("student_run");
	}
}

// Java的实例方法调用是基于运行时的实际类型的动态调用，而非变量的声明类型。
// 即，如果 Person s = new Student()  s.run() 调用的是子类的run方法而非父类

// 好处就是当某个实例作为参数时，调用者无需知道改类具体是属于哪一个层级，只需要调用对应的方法即可。
// java会在编译的时候自动判断出该实例是属于哪一个类，从而正确调用对应的方法

// 在子类的覆写方法中，如果要调用父类的被覆写的方法，可以通过super来调用。例如：










