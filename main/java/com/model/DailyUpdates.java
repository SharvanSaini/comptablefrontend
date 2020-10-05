package com.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="DailyUpdates")
public class DailyUpdates {
	@Id
	@SequenceGenerator(name = "generator", sequenceName = "id_SEQUENCE", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
	private int id;
	private Date attend;
	private int meetingnumber;
	private String subject;
	private String slot;
	private String workdetails;
	private String extradetails;
	
public DailyUpdates() {
		
	}


@Override
public String toString() {
	return "DailyUpdates [id=" + id + ", attend=" + attend + ", meetingnumber=" + meetingnumber + ", subject=" + subject
			+ ", slot=" + slot + ", workdetails=" + workdetails + ", extradetails=" + extradetails + "]";
}


public DailyUpdates(int id, Date attend, int meetingnumber, String subject, String slot, String workdetails,
		String extradetails) {
	super();
	this.id = id;
	this.attend = attend;
	this.meetingnumber = meetingnumber;
	this.subject = subject;
	this.slot = slot;
	this.workdetails = workdetails;
	this.extradetails = extradetails;
}


public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public Date getAttend() {
	return attend;
}

public void setAttend(Date attend) {
	this.attend = attend;
}

public int getMeetingnumber() {
	return meetingnumber;
}

public void setMeetingnumber(int meetingnumber) {
	this.meetingnumber = meetingnumber;
}

public String getSubject() {
	return subject;
}

public void setSubject(String subject) {
	this.subject = subject;
}

public String getSlot() {
	return slot;
}

public void setSlot(String slot) {
	this.slot = slot;
}

public String getWorkdetails() {
	return workdetails;
}

public void setWorkdetails(String workdetails) {
	this.workdetails = workdetails;
}

public String getExtradetails() {
	return extradetails;
}

public void setExtradetails(String extradetails) {
	this.extradetails = extradetails;
}

	
	
	
}
