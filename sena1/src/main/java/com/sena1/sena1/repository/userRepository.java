package com.sena1.sena1.repository;

import com.sena1.sena1.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<Client, Integer> {
}
