package Practice;

import java.util.*;
import java.lang.*;

public class bnw 
{

	public static void main(String[] args) 
	{
		Scanner in = new Scanner(System.in);
		String s = "crown";
		System.out.println("No. of words = "+s.length());
		int l = 0;
		int n = 0;
		int Q=3;
		while(l==0)
		{
			System.out.println("Guess:");
			String guess = in.next();
			if(guess.length()==s.length())
			{
				n++;
				System.out.println("Guess no."+n);
				l=Count(guess,s);
				System.out.println();
				
			}
			else {
				if( guess.equals("Q")==true)
				{
					System.out.print("U have "+Q);
					System.out.println(" questions left");
					if(Q>0)
					{
						System.out.println("Choose the type of Q (L or L+P):");
						String c = in.next();
						if(c.equals("L")==true)
						{
							char i = (in.next()).charAt(0);
							boolean check = false;
							for(int j = 0;j<s.length();j++)
							{
								if(s.charAt(j)== i)
								{check = true;}
							}
							System.out.println(check);
							if(check==false)
							Q--;
							System.out.println();
						}else
						{
							System.out.print("Enter letter ");
							char i = (in.next()).charAt(0);
							System.out.print("Enter position ");
							int y = in.nextInt();
							boolean check = false;
							for(int j = 0;j<s.length();j++)
							{
								if(s.charAt(j)== i&&j+1==y)
								{check = true;}
							}
							System.out.println(check);
							if(check==false)
								Q--;
							System.out.println();
							
						}
					}
				}else
				{System.out.println("We all make mistakes.Guess wont be counted dont worry");}
			}	
		}
	}
	
	public static int Count(String g, String s)
	{
		int B = 0;
		int W = 0;
		int x = 0;
		for(int i =0;i<g.length();i++)
		{
			for(int j =0;j<g.length();j++)
			{
				if(i<g.length()&j<s.length())
					{
					if(g.charAt(i)==s.charAt(j))
					{
						if(i==j)
						{
							W++;
						}else{B++;}
						i++;
						j=0;
					}
					}
				
			}
		}
		
		if(W == g.length())
		{
			System.out.print("Congratulations good job");
	        x = 1;
		}
		else
		{System.out.println("W = "+W);
		System.out.println("B = "+B);}
		return x;
	}

}
