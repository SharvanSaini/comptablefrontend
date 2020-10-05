package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.DailyUpdates;

public interface DetailsRepository extends JpaRepository<DailyUpdates, Integer> {

}
