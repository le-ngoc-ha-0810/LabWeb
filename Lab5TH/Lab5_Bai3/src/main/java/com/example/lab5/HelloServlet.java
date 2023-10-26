//package com.example.lab5;
import java.io.*;
import  javax.servlet.ServletException;
import  javax.servlet.annotation.WebServlet;
import  javax.servlet.http.HttpServlet;
import  javax.servlet.http.HttpServletRequest;
import  javax.servlet.http.HttpServletResponse;
import  java.io.IOException;

@WebServlet("/login")
public class HelloServlet extends HttpServlet {

    String url = "/welcome.jsp";
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset = UTF-8");
        String s = request.getParameter("user");
        String sd = request.getParameter("password");
        if(s.isEmpty() && sd.isEmpty()){
            response.getWriter().append("Tên đăng nhập và password không được trống");
        }
        if(s.equals("lengocha@gmail.com") && sd.equals("123")){
            request.getServletContext().getRequestDispatcher(url).forward(request, response);
        }
        if((!s.equals("lengocha@gmail.com") && sd.equals("123")) || (s.equals("lengocha@gmail.com") && !sd.equals("123"))){
            response.getWriter().append("Tên hoặc mật khẩu đăng nhập sai");
        }
    }



    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    public void destroy() {
    }
}