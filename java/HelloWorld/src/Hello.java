import java.util.Arrays;

public class Hello {
	public static void main(String[] args) {
//		args �����õ������в���

//		System.out.println("hello world");
//		int x = 100;
//		System.out.println(x);

//        int i = 2147483647;
//        int i2 = -2147483648;
//        int i3 = 2_000_000_000; // ���»��߸�����ʶ��
//        int i4 = 0xff0000; // ʮ�����Ʊ�ʾ��16711680
//        int i5 = 0b1000000000; // �����Ʊ�ʾ��512
//        long l = 9000000000000000000L; // long�͵Ľ�β��Ҫ��L
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
//		String t = s; // t������һ���µĵ�ַָ����s
//		s = "world"; // s�ֿ�����һ���µĿռ������洢"world"
//		System.out.println(t);
//		System.out.println("s" + " " + s);
//		
//		int a = 'A';
//		char b = '\u0065';
//		System.out.println(a);
//		System.out.println(b);

//		��������
//		ע���������������ͣ����������С���ɱ�
//		int[] ns = new int[5];
//		ns[0] = 1;
//		System.out.println(ns);

//		�������
//		double d = 3.1415926;
//		System.out.printf("%.2f\n", d);

//		switch����ѡ��
//		int x = 1;
//		switch (x) {
//		case 1: System.out.println("ok"); break;
//		default: System.out.println("fck");
//		}

//		while ѭ��
//		int n = 10;
//		while(n > 0) {
//			n -= 1;
//			System.out.println(n);
//		}

//		forѭ��
//		for(int i = 0; i < 10; i++) {
//			System.out.println(i);
//		}

//		�õ�������ÿ��ֵ
//		int[] ns = {1, 3, 2};
//		for(int n: ns) {
//			System.out.println(n);
//		}
//		Arrays.sort(ns);
//		System.out.println(Arrays.toString(ns));

//		��ά����
		int[][] ns = { { 1, 2, 3, 4 }, { 2, 3, 4, 5 } };
		System.out.println(Arrays.deepToString(ns));

		Person ming = new Person();
		ming.setName("xiaobai"); // ���ֶ�name��ֵ
		ming.setAge(15); // ���ֶ�age��ֵ
		System.out.println(ming.getAge() + " " + ming.getName());
		
//		�ɱ����
		Group myGroup = new Group();
		myGroup.setNames("123", "321", "213");
		String names = Arrays.deepToString(myGroup.getNames());
		System.out.println(names);
		
		
//		�������Ͳ����Ĵ��ݣ��ǵ��÷�ֵ�ĸ��ơ�˫�����Եĺ����޸ģ�����Ӱ��
//		�������Ͳ����Ĵ��ݣ����÷��ı������ͽ��շ��Ĳ���������ָ�����ͬһ������˫������һ�������������޸ģ�
//		����Ӱ��Է�����Ϊָ��ͬһ���������
		
		
	}

}

class Person {
	// ����������ֱ�Ӷ��ֶθ�ֵ 
	private String name; // private �ֶ��з������� 
	private int age;
//	�κι��캯�����й��췽��������û�ж���Ļ�java��Ĭ�ϸ����Ƕ���һ�����µĹ��췽��
	
	public Person() {
		// Ĭ�ϵĹ��췽��
		// new Person() ����Ĳ����Ϳ�����������յ�
		
		// һ�����췽�����Ե�����һ�����췽�������������������
		this("xiaobai", 13); // ��������������һ�����췽��
	}
//	������ҪĬ�ϵ�����Ҫ���Դ��εģ����������д����
	public Person(String name, int age) {
		// ����
	}
	
	public String getName() {
//		this����ָ��ǰʵ��
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

// �κ��඼�̳���Object�� Object���κ�����ϼ���
class Person1 {
	protected String name;
	protected int age;
//	������protected ����������ͣ������������ܹ����ʵ���
}

// ������Ϊ��Java�У��κ�class�Ĺ��췽������һ���������ǵ��ø���Ĺ��췽�������û����ȷ�ص��ø���Ĺ��췽����
// ��������������Զ���һ��super();
class Student extends Person1 {
	public Student() {
		// ���û�м�super(), ���������Զ����
		// ����Ҫע�⸸���й��췽���Ƿ��в���������еĻ���Ҫ�ֶ���ӣ�����super("xiaoming", 13)
		// ����������ֶ�д��super()����;
	}
	
	public void Hello() {
		System.out.println("hello" + this.name);
	}
}

// ����ת��
// �������´���
// Person s = new Student()
// Student�̳���Person�� ���������ǿ��Եģ���ΪPerson���ܱ�Student�٣�Person����Student

// ��֮���Ϊ����ת�ͣ�����
// Student s = new Person() 
// �����ǻᱨ��ģ���Ϊ���๦�������ȸ���࣬�޷����ݡ�

// ����������ʲô���;���ʲô���ͼ���


// ��̬�� ������д���෽��
class Person2 {
	// ����÷������������าд�� �����һ��final����
	// ���� public final void run() {} ����
//	����һ�����ʵ���ֶΣ�ͬ��������final���Ρ���final���ε��ֶ��ڳ�ʼ�����ܱ��޸ġ����磺
	
	public final String name;
	
	public Person2() {
		// ��ʼ��name
		this.name = "123";
	}

	public void run() {
//		this.name = "321"; ��ʼ��֮���ٶ�final �ֶθ�ֵ��ᱨ��
		System.out.println("person_run");
	}
}

class Student1 extends Person2 {
	@Override
	public void run() {
		// �������ʹ��super.run() ���ø���ĸ÷���(Ӧ�ò����������ڸ�д���������෽����Ҫ���ø���ķ�������������)
		System.out.println("student_run");
	}
}

// Java��ʵ�����������ǻ�������ʱ��ʵ�����͵Ķ�̬���ã����Ǳ������������͡�
// ������� Person s = new Student()  s.run() ���õ��������run�������Ǹ���

// �ô����ǵ�ĳ��ʵ����Ϊ����ʱ������������֪�����������������һ���㼶��ֻ��Ҫ���ö�Ӧ�ķ������ɡ�
// java���ڱ����ʱ���Զ��жϳ���ʵ����������һ���࣬�Ӷ���ȷ���ö�Ӧ�ķ���

// ������ĸ�д�����У����Ҫ���ø���ı���д�ķ���������ͨ��super�����á����磺










