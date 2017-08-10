package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.*;
import com.mycompany.myapp.service.dto.EmployeeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Employee and its DTO EmployeeDTO.
 */
@Mapper(componentModel = "spring", uses = {DepartmentMapper.class, })
public interface EmployeeMapper extends EntityMapper <EmployeeDTO, Employee> {

    @Mapping(source = "department.id", target = "departmentId")
    EmployeeDTO toDto(Employee employee); 

    @Mapping(source = "departmentId", target = "department")
    @Mapping(target = "jobs", ignore = true)
    Employee toEntity(EmployeeDTO employeeDTO); 
    default Employee fromId(Long id) {
        if (id == null) {
            return null;
        }
        Employee employee = new Employee();
        employee.setId(id);
        return employee;
    }
}
