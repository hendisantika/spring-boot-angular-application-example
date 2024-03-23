package id.my.hendisantika.backend.service;

import id.my.hendisantika.backend.entity.User;
import id.my.hendisantika.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * Project : spring-boot-angular-application-example
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 3/23/24
 * Time: 07:59
 * To change this template use File | Settings | File Templates.
 */
@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User insert(User userVO) {
        return this.userRepository.save(userVO);
    }

    public List<User> findAll() {
        return this.userRepository.findAll();
    }

    public void delete(int id) {
        this.userRepository.deleteById(id);
    }

    public User findById(int id) {
        return this.userRepository.findById(id).get();
    }
}
