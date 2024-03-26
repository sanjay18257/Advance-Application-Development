package com.yoga.backend.service;

import java.security.Principal;

import com.yoga.backend.dto.request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

}
