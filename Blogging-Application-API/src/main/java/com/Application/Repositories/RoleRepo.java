package com.Application.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Application.Entities.Role;

public interface RoleRepo extends JpaRepository<Role, Integer> {

}
