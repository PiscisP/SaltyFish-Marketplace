package com.test.service;

import com.test.response.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Authentication {
    private static class AuthenticatedUser
    {
        public String username;
        public long lastActionTimeMillis;

        public AuthenticatedUser(String username, long loginTime)
        {
            this.username = username;
            lastActionTimeMillis = loginTime;
        }
    }


    // key is the ip address of the user
    private static HashMap<String, AuthenticatedUser> authenticatedUsers = new HashMap<String, AuthenticatedUser>();

    private static boolean verifyAccount(String username, String password)
    {
        /*
         * Function body
         */
        return false;
    }

    /*
     * Behavior:
     * 1. If the same account is logged in on some other device, then the new login attempt
     *    will succeed and the account will be logged out on the other device
     *
     * 2. If the client is already logged in by one account and attempts to log in by another
     *    account on the same device, then the new login attempt will succeed and the old
     *    account will be logged out
     */
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



    /*
     * @param ip       the ip address of the client
     */
    public static void logout(String ip)
    {
        authenticatedUsers.remove(ip);
    }

    /*
     * @param ip       the ip address of the client
     * @param username the username that the client used to log in
     * @param password the password that the client used to log in
     * @return         returns true if the login is success. returns false otherwise
     */
    public static boolean login(String ip, String username, String password)
    {
        boolean success = verifyAccount(username, password);
        if (!success) { return false; }


        long loginTime = System.currentTimeMillis();
        addToAuthenticatedUsers(ip, username, loginTime);

        return true;
    }

    /*
     * @param ip       the ip address of the client
     * @return         returns the username that is current logged in on the device. returns
     *                 null if device is not logged in
     */
    public static String getAuthenticatedUsername(String ip)
    {
        if(!authenticatedUsers.containsKey(ip)) { return null; }

        return authenticatedUsers.get(ip).username;
    }

}
