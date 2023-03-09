CREATE DATABASE APICURSOS;
USE APICURSOS;

CREATE TABLE Users(
    userId INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    pass VARCHAR(100) NOT NULL,
    userType VARCHAR(50) NOT NULL,
    firstNames VARCHAR(100) NOT NULL,
    lastNames VARCHAR(100) NOT NULL,
    imageProfile BLOB,
    gender varchar(10) NOT NULL,
    birthdate DATE NOT NULL,
    registrationDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    dateUpdate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    attemps INT NOT NULL DEFAULT 0,
    PRIMARY KEY (userId)
);

DELIMITER //
CREATE PROCEDURE sp_LogInEmail(IN _email varchar(50))
BEGIN
    SELECT attemps FROM users WHERE email = _email;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_LogInPassword(IN emaiil varchar(50), IN _password varchar(50))
BEGIN
    SELECT userId FROM users WHERE email = emaiil AND pass = _password;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_IncrementUserAttemps(IN _attemps INT, IN _email varchar(50))
BEGIN
    UPDATE users SET attemps = _attemps WHERE email = _email;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_ObtenerUsuarioPorId(IN _userId INT)
BEGIN
    SELECT userId, email, pass, userType, firstNames, lastNames, imageProfile, gender, birthDate, registrationDate, dateUpdate, attemps
    FROM users WHERE userId = _userId;
END //
DELIMITER ;

CALL sp_LogInPassword('alvaro.duronalj@uanl.edu.mx', '123');
CALL sp_LogInEmail('alvaro.duronalj@uanl.edu.mx');
CALL sp_ObtenerUsuarioPorId(1);

INSERT INTO Users (email, pass, userType, firstNames, lastNames, gender, birthdate)
VALUES ('alvaro.duronalj@uanl.edu.mx', '123', 'alumn', 'Alvaro Ramses', 'Duron Alejo', 'male', '1996-05-17');

SELECT * FROM  Users;
UPDATE users SET attemps = 0 WHERE email = 'alvaro.duronalj@uanl.edu.mx';
UPDATE users SET firstNames = 'Alvaro Ramses' WHERE userId = 1;
UPDATE users SET birthDate = '1996-05-17' WHERE userId = 1;
UPDATE users SET userType = 'Instructor' WHERE userId = 1;
UPDATE users SET gender = 'Masculino' WHERE userId = 1;