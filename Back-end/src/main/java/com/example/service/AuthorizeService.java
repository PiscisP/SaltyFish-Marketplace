package com.example.service;
import  org.springframework.security.core.userdetails.UserDetailsService;


public interface AuthorizeService extends UserDetailsService{
    boolean sendValidateEmail(String email,String sessionId);
}

/*@Service
public class AuthorizeService implements UserDetailsService{
    @Resource
    UserMapper mapper;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        if(username == null)
            throw new UsernameNotFoundException("Username cant be empty");
        Account account = mapper.FindAccountByNameOrEmail(username);
        if(account == null)
            throw new UsernameNotFoundException("Wrong Username or Password");
        return  User
                .withUsername((account.getUsername()))
                .password((account.getPassword()))
                .roles("user")
                .build();
    }
}*/
