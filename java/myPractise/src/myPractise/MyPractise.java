package myPractise;

public class MyPractise {
	public static void main(String[] args) {
		System.out.println("123");
		String s1 = "hello";
		
		// ��������Ҫ�Ƚ������ַ����Ƿ���ͬʱ��Ҫ�ر�ע�⣬����ʵ��������Ƚ��ַ����������Ƿ���ͬ������ʹ��equals()������������==��

		String s2 = "hello";
//		System.out.println(s1 == s2);
//		System.out.println(s1.equals(s2));
		// Ҫ���Դ�Сд�Ƚϣ�ʹ��equalsIgnoreCase()������
		
		// �Ƿ�����Ӵ�:
//		System.out.println(s1.contains("he"));
		// ĳ���ַ����ַ����е�λ��
		// lastIndexOf ��ĩβ��ʼ�ң� ���Ƿ��ص��±���Ȼ��������
//		System.out.println(s1.indexOf("ll"));
//		System.out.println(s1.lastIndexOf("o"));
		// startsWith
		// endsWith
//		System.out.println(s1.substring(2)); // ��2����β
//		System.out.println(s1.substring(2, 4));
//		System.out.println(s1.substring(0, 2));
		
//		ȥ����β�հף� trim
		String s3 = "   hello  ";
		System.out.println(s3.trim());
		
		// �滻�Ӵ�
		System.out.println(s3.replace("he", "eh"));
		String[] strArr = {"a", "b", "c"};
		System.out.println(String.join("", strArr));
		System.out.println(String.format("Hi, %s, this is your %.2f", "xiaoming", 123.32));
		
//		%s����ʾ�ַ�����
//		%d����ʾ������
//		%x����ʾʮ������������
//		%f����ʾ��������
		
		System.out.println(String.valueOf(123));
		System.out.println(String.valueOf(true));
		
		int n1 = Integer.parseInt("123");
		
		boolean b1 = Boolean.parseBoolean("true");
		boolean b2 = Boolean.parseBoolean("123");
		System.out.println(b1);
		System.out.println(b2);
	}

}
