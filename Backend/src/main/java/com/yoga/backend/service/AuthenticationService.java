package com.yoga.backend.service;

import java.io.IOException;

import com.yoga.backend.dto.request.LoginRequest;
import com.yoga.backend.dto.request.RegisterRequest;
import com.yoga.backend.dto.response.LoginResponse;
import com.yoga.backend.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
