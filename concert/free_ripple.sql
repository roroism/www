create table free_ripple (
   num int not null auto_increment,
   parent int not null,
   id char(15) not null,
   name  char(10) not null,
   nick  char(10) not null,
   content text not null,
   regist_day char(20),
   depth int DEFAULT 0,
   c_order int,
   groupNum int,
   updateFlag int DEFAULT 0,
   to_nick char(10),
   primary key(num)
);

