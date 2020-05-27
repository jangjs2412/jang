package tutorial;

import com.opensymphony.xwork2.ActionSupport;

public class HelloStruts extends ActionSupport {

	@Override
	public String execute() throws Exception {
		System.out.println("HelloStruts.java 접근!");
		return SUCCESS;
	}
	
	private String name;
	private String pass;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}

	

}
