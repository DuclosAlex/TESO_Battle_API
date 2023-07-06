# Dev Log Teso Battle API 

## 21/06/2023 

Add Campaings in sql script. Add FindAll methods for Campaingns and start work on battle menu in front-end part to start connect back and front.
!!! Issue with endpoint in campaing controller, apparently endpoint with param should be after other endpoint, if not endpoint without params can be reached !!! 

## 20/06/2023

Work complete on most basics table for beginning Game. User table made with bcrypt process, have to had some authentification middleware based on user Role and Log endpoint TODO. Start writing sql script to make test data for front dev. Add class-validator for userModel, had to explore more deeper this package. 

!!! Dont' forget bcrypt/types with Typescript project !!! 

## 19/06/2023 

Start built of API for Teso Battle Project. 
Begin with TypeOrm and Postgres configuration. 
Table skill and Character made with basic data. Relation oneToOne between Skill and Character. Test Insomnia make with road Get(create) and Post(findById)
Character for V0.1 to built. 

TODO : 

1st priority :

- Finish Initial Script SQL
- At user creation, create caracteristics for each character ? Had to look about something like RabbitMQ ou Redis...
- Look for security authentification, maybe json Web Token and protection againts CSRF with helmet or other...


Other : 

- Think about rôles of character ( example :  Aurida, Nord, Warrior Guild...) how can i build table for this ? 
- Think about dialog for battle ( dialog Table and Relationship with Stage table)


