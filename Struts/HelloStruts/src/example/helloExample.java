package example;

public class helloExample {
	
	public String execute() throws Exception{
		System.out.println("java Hello.");
		this.message = "HELLO STURTS!!!";
		return "success";
	}
	
	private String message;
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	
	

}
