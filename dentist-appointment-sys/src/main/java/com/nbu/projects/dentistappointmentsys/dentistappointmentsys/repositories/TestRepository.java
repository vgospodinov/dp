package com.nbu.projects.dentistappointmentsys.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.dentistappointmentsys.models.TestData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<TestData, Long> {
}
