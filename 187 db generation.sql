DROP DATABASE IF EXISTS sf_db;
CREATE DATABASE sf_db;
USE sf_db;

CREATE TABLE User (
	uid				int				AUTO_INCREMENT,
	avatar			varchar(4000),
    first_name		varchar(20)		,
    last_name		varchar(20)		,
	username		varchar(40)		,
    email			varchar(50)		,
    phone_number	int				,
    address			varchar(100)	,
    scu_id			int,
    password		varchar(100)		,
    
	PRIMARY KEY (uid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO User VALUES
(1, "avatar.jpg", "Kuangyu",  "Dai",  "kdai",  "kdai@scu.edu", 10086, "500 El Camino Real, Santa Clara, CA 95053", 10, "00000"),
(2, "avatar.jpg",  "Jiewen", "Chen", "jchen", "jchen@scu.edu", 10010, "500 El Camino Real, Santa Clara, CA 95053", 20, "11111"),
(3, "avatar.jpg",  "Ninjun",   "Li",   "nli",   "nli@scu.edu", 12306, "500 El Camino Real, Santa Clara, CA 95053", 30, "22222"),
(4, "avatar.jpg",    "Zhou",   "Lu",   "zlu",   "zlu@scu.edu", 10050, "500 El Camino Real, Santa Clara, CA 95053", 40, "33333"),
(5, "avatar.jpg", "Haoyang", "Zhou", "hzhous", "hzhou@scu.edu", 12306, "500 El Camino Real, Santa Clara, CA 95053", 50, "$2a$10$CmGP1s2fAdN.OYgPkXqBWOzuyfpg51xktHb5gMYxHG5GbFLQp2Xv6");

CREATE TABLE Product (
	pid				int				AUTO_INCREMENT,
	tag				varchar(100),
    description		varchar(200)	,
    price			double			,
    condition_		varchar(100)	,
    upload_time		datetime		,
    seller_id		int				,
    picture			varbinary(4000),
    
	PRIMARY KEY (pid),
    FOREIGN KEY (seller_id) REFERENCES User(uid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO Product VALUES
(1, "stationary",                             "a pencil that can be seen anywhere", 2.99, "80% used", '2023-11-16 14:25:13', 4, "pencil.jpg"),
(2, "stationary", "an unused erasor that has all 12 edges and 8 corners preserved", 4.99,  "0% used", '2023-11-16 08:05:56', 2, "erasor.jpg");

CREATE TABLE Transaction (
	tid				int				NOT NULL,
	seller_id		int				NOT NULL,
    buyer_id		int				NOT NULL,
    product_id		int				NOT NULL,
    status			varchar(10)		NOT NULL,
    date			datetime		NOT NULL,
    
	PRIMARY KEY (tid),
    FOREIGN KEY (seller_id) REFERENCES User(uid),
    FOREIGN KEY (buyer_id) REFERENCES User(uid),
    FOREIGN KEY (product_id) REFERENCES Product(pid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO Transaction VALUES
(0, 4, 1, 1, "complete", "2023-11-16 14:32:34"),
(1, 2, 1, 2, "complete", "2023-11-16 14:33:01");

CREATE TABLE persistent_logins (
	username varchar(100) not null, 
	series varchar(64) primary key, 
	token varchar(64) not null, 
	last_used timestamp not null 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
