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

CREATE TABLE Cursos(
    idCurso INT NOT NULL AUTO_INCREMENT,
    cost INT NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    promedio INT NOT NULL,
    imagen BLOB NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    activo BOOLEAN DEFAULT true,
    instructor INT NOT NULL,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (idCurso),
    FOREIGN KEY (instructor) REFERENCES users(userId)
);

CREATE TABLE CursoAlumno(
    idCursoAlumno INT NOT NULL AUTO_INCREMENT,
    curso INT NOT NULL,
    alumno INT NOT NULL,
    compro_completo BOOLEAN NOT NULL,
    termino_curso BOOLEAN NOT NULL,
    fecha_terminacion DATETIME NOT NULL,
    fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    forma_pago VARCHAR(50) NOT NULL,
    cantidad_pagada INT NOT NULL,
    PRIMARY KEY (idCursoAlumno),
    FOREIGN KEY (curso) REFERENCES cursos(idCurso),
     FOREIGN KEY (alumno) REFERENCES users(userId)
);

CREATE TABLE NivelCurso(
    idNivelCurso INT NOT NULL AUTO_INCREMENT,
    curso INT NOT NULL,
    costo INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    PRIMARY KEY (idNivelCurso),
    FOREIGN KEY (curso) REFERENCES cursos(idCurso)
);

CREATE TABLE NivelCursoAlumno(
    idNivelCursoAlumno INT NOT NULL AUTO_INCREMENT,
    nivel INT NOT NULL,
    alumno INT NOT NULL,
    termino BOOLEAN NOT NULL DEFAULT false,
    fecha_ultimo_ingreso DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idNivelCursoAlumno),
    FOREIGN KEY (nivel) REFERENCES NivelCurso(idNivelCurso),
    FOREIGN KEY (alumno) REFERENCES users(userId)
);

CREATE TABLE Secciones(
    idSecciones INT NOT NULL AUTO_INCREMENT,
    nivel INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    contenido BLOB NOT NULL,
    idUsuario INT NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idSecciones),
    FOREIGN KEY (nivel) REFERENCES NivelCurso(idNivelCurso),
    FOREIGN KEY (idUsuario) REFERENCES users(userId)
);

CREATE TABLE Categorias(
    idCategoria INT NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(100) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idCategoria)
);

CREATE TABLE CategoriasCursos(
    idCategoriaCurso INT NOT NULL AUTO_INCREMENT,
    curso INT NOT NULL,
    categoria INT NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idCategoriaCurso),
    FOREIGN KEY (curso) REFERENCES Cursos(idCurso),
    FOREIGN KEY (categoria) REFERENCES Categorias(idCategoria)
);

CREATE TABLE Mensajes(
    idMensaje INT NOT NULL AUTO_INCREMENT,
    user1 INT NOT NULL,
    user2 INT NOT NULL,
    mensaje VARCHAR(500) NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idMensaje),
	FOREIGN KEY (user1) REFERENCES users(userId),
    FOREIGN KEY (user2) REFERENCES users(userId)
);

CREATE TABLE Comentarios(
    idComentario INT NOT NULL AUTO_INCREMENT,
    idCurso INT NOT NULL,
    idUsuario INT NOT NULL comment 'es el id del usuario que hace el comentario',
    comentario VARCHAR(500) NOT NULL,
    calificaion INT NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idComentario),
    FOREIGN KEY (idCurso) REFERENCES Cursos(idCurso),
    FOREIGN KEY (idUsuario) REFERENCES users(userId)
);

CREATE TABLE Videos(
    idVideo INT NOT NULL AUTO_INCREMENT,
    video BLOB NOT NULL,
    idSeccion INT NOT NULL,
    idUsuario INT NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idVideo),
    FOREIGN KEY (idSeccion) REFERENCES Secciones(idSecciones),
    FOREIGN KEY (idUsuario) REFERENCES users(userId)
);
USE APICURSOS;
select * from users;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pink$1624';