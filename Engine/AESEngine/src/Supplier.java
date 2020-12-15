
public class Supplier 
{
	
	private String email, first_name, last_name;

	public Supplier(String email, String first_name, String last_name) 
	{
		this.email = email;
		this.first_name = first_name;
		this.last_name = last_name;
	}
	
	public Supplier()
	{
		this.email = "error";
		this.first_name = "error";
		this.last_name = "error";
	}

	public String getEmail() 
	{
		return this.email;
	}

	public void setEmail(String email) 
	{
		this.email = email;
	}

	public String getFirst_name() 
	{
		return this.first_name;
	}

	public void setFirst_name(String first_name) 
	{
		this.first_name = first_name;
	}

	public String getLast_name() 
	{
		return this.last_name;
	}

	public void setLast_name(String last_name) 
	{
		this.last_name = last_name;
	}
	
	
	
	
	
	
	
	

}
