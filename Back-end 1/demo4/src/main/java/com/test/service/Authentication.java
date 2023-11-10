package com.test.service;

import com.test.response.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Authentication {
    private static class AuthenticatedUser
    {
        public AuthenticatedUser(String username, long loginTime)
        {
            this.username = username;
            lastActionTimeMillis = loginTime;
        }
        public String username;
        public long lastActionTimeMillis;
    }


    // key is the ip address of the user
    private static HashMap<String, AuthenticatedUser> authenticatedUsers = new HashMap<String, AuthenticatedUser>();

    private static boolean verifyPassword(String username, String password)
    {
        return false;
    }

    private static void addToAuthenticatedUsers(String ip, String username, long loginTime)
    {
        List<String> conflictedLogins = new ArrayList<String>();
        for (String client_ip : authenticatedUsers.keySet()) {
            AuthenticatedUser user = (AuthenticatedUser)authenticatedUsers.get(client_ip);
            if (user.username.equals(username))
            {
                conflictedLogins.add(client_ip);
            }
        }

        for (String conflict_ip : conflictedLogins)
        {
            logout(conflict_ip);
        }

        authenticatedUsers.put(ip, new AuthenticatedUser(username, loginTime));
    }




    public static void logout(String ip)
    {
        authenticatedUsers.remove(ip);
    }

    public static boolean login(String ip, String username, String password)
    {
        boolean success = verifyPassword(username, password);
        if (!success) { return false; }


        long loginTime = System.currentTimeMillis();
        addToAuthenticatedUsers(ip, username, loginTime);

        return true;
    }

    // returns null if the client is not authenticated
    public static String getAuthenticatedUsername(String ip)
    {
        return authenticatedUsers.get(ip).username;
    }

}
