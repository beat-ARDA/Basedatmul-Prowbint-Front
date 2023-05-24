DELIMITER //
CREATE PROCEDURE sp_LogInEmail(IN _email varchar(50))
BEGIN
    SELECT attemps FROM users WHERE email = _email;
END //
DELIMITER;

DELIMITER //
CREATE PROCEDURE sp_LogInPassword(IN emaiil varchar(50), IN _password varchar(50))
BEGIN
    SELECT userId FROM users WHERE email = emaiil AND pass = _password;
END //
DELIMITER;

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

DELIMITER //
CREATE PROCEDURE sp_ActualizarUsuario(
IN _userId INT,
IN _email VARCHAR(50), 
IN _pass VARCHAR(100), 
IN _userType VARCHAR(50), 
IN _firstNames VARCHAR(100), 
IN _lastNames VARCHAR(100), 
IN _imageProfile LONGBLOB, 
IN _gender VARCHAR(10), 
IN _birthDate DATE,
IN _borroImagen BOOLEAN)
BEGIN

IF _imageProfile <> '' OR _borroImagen THEN 
   UPDATE users SET 
   email = _email, 
   pass = _pass, 
   userType = _userType, 
   firstNames = _firstNames, 
   lastNames = _lastNAmes, 
   imageProfile = _imageProfile, 
   gender = _gender, 
   birthDate = _birthDate 
   WHERE userId = _userId;
END IF;
IF _imageProfile = '' AND NOT _borroImagen THEN 
   UPDATE users SET 
   email = _email, 
   pass = _pass, 
   userType = _userType, 
   firstNames = _firstNames, 
   lastNames = _lastNAmes, 
   gender = _gender, 
   birthDate = _birthDate 
   WHERE userId = _userId;
END IF;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_RegistrarUsuario(
IN _email VARCHAR(50), 
IN _pass VARCHAR(100), 
IN _userType VARCHAR(50), 
IN _firstNames VARCHAR(100), 
IN _lastNames VARCHAR(100), 
IN _imageProfile LONGBLOB, 
IN _gender VARCHAR(10), 
IN _birthDate DATE)
BEGIN
  INSERT INTO users (email, pass, userType, firstNames, lastNames, imageProfile, gender, birthdate)
  VALUES (_email, _pass, _userType, _firstNames, _lastNames, _imageProfile, _gender, _birthDate);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_InsertarCategoria(
IN _descripcion VARCHAR(50),
IN _nombre varchar(50))
BEGIN
  INSERT INTO categorias (descripcion, nombre)
  VALUES (_descripcion, _nombre);
END //
DELIMITER ;

CALL sp_InsertarCategoria('Descripction', 'Tecnologia');

select * from categorias;
USE APICURSOS;
update users set attemps = 0 where userId = 1;