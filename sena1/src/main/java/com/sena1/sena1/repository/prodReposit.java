package com.sena1.sena1.repository;

import com.sena1.sena1.model.Client;
import com.sena1.sena1.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface prodReposit extends JpaRepository<Product, Integer> {
}

