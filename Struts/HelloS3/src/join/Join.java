package join;

import com.opensymphony.xwork2.ActionSupport;

public class Join extends ActionSupport {

	private String id;
	private String name;
	private String tel;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		System.out.println(getId());
		System.out.println(getName());
		System.out.println(getTel());
		
		if(getId().length() <=3) {
			return INPUT;
		}
		else if(getId().length() > 6) {
			return ERROR;
		}
		else {
			return SUCCESS;
		}
	}
}
