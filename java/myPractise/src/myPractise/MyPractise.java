package myPractise;

public class MyPractise {
	public static void main(String[] args) {
		System.out.println("123");
		String s1 = "hello";
		
		// 当我们想要比较两个字符串是否相同时，要特别注意，我们实际上是想比较字符串的内容是否相同。必须使用equals()方法而不能用==。

		String s2 = "hello";
//		System.out.println(s1 == s2);
//		System.out.println(s1.equals(s2));
		// 要忽略大小写比较，使用equalsIgnoreCase()方法。
		
		// 是否包含子串:
//		System.out.println(s1.contains("he"));
		// 某个字符在字符串中的位置
		// lastIndexOf 从末尾开始找， 但是返回的下标依然是正数的
//		System.out.println(s1.indexOf("ll"));
//		System.out.println(s1.lastIndexOf("o"));
		// startsWith
		// endsWith
//		System.out.println(s1.substring(2)); // 从2到结尾
//		System.out.println(s1.substring(2, 4));
//		System.out.println(s1.substring(0, 2));
		
//		去除首尾空白， trim
		String s3 = "   hello  ";
		System.out.println(s3.trim());
		
		// 替换子串
		System.out.println(s3.replace("he", "eh"));
		String[] strArr = {"a", "b", "c"};
		System.out.println(String.join("", strArr));
		System.out.println(String.format("Hi, %s, this is your %.2f", "xiaoming", 123.32));
		
//		%s：显示字符串；
//		%d：显示整数；
//		%x：显示十六进制整数；
//		%f：显示浮点数。
		
		System.out.println(String.valueOf(123));
		System.out.println(String.valueOf(true));
		
		int n1 = Integer.parseInt("123");
		
		boolean b1 = Boolean.parseBoolean("true");
		boolean b2 = Boolean.parseBoolean("123");
		System.out.println(b1);
		System.out.println(b2);
	}

}
