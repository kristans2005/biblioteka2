<?php


class DbController{

    public $dbConnection;

    function __construct($dbConnections)
    {
        $this->dbConnection = $dbConnections;
    }


    public function returnBooks()
    {
        $result = $this->dbConnection->dbConn->query(' SELECT * FROM books 
                                                    INNER JOIN authors
                                                    ON books.author_id = authors.author_id');
        $result->execute();
        $result = $result->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function getBookByID($id){
        $result = $this->dbConnection->dbConn->query(' SELECT * FROM books
                                                    INNER JOIN authors ON books.author_id = authors.author_id
                                                    WHERE books.book_id = '. $id );
        $result->execute();
        $result = $result->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }


    public function checkBook($title, $author, $year, $image, $description) {
        $data = [$title, $author, $year, $image, $description];
        foreach($data as $datum){
            if(empty($datum)){
                return false;
            }
        }
        return true;
    }
    

// my written code without chaGPS ;)
public function addBook($title, $author, $year, $stock, $image, $description) {
    if($this->dbConnection->dbConn != null){
        $sql = 'SELECT * FROM authors WHERE name = :name';
        $stmt = $this->dbConnection->dbConn->prepare($sql);
        $stmt->bindParam(':name', $author);
        $stmt->execute();

        if($stmt->rowCount() > 0){
            $authorRow = $stmt->fetch(PDO::FETCH_ASSOC);
            $authorId = $authorRow['author_id'];
        } else {
            $sql = 'INSERT INTO authors (name) VALUES (:name)';
            $stmt = $this->dbConnection->dbConn->prepare($sql);
            $stmt->bindParam(':name', $author);
            $stmt->execute();
            $authorId = $this->dbConnection->dbConn->lastInsertId();
        }

        $sql = 'INSERT INTO books (title, author_id, publication_year, books_left, image, description) VALUES (:title, :author_id, :year, :books_left, :image, :description)';
        $stmt = $this->dbConnection->dbConn->prepare($sql);
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':author_id', $authorId);
        $stmt->bindParam(':year', $year);
        $stmt->bindParam(':books_left', $stock);
        $stmt->bindParam(':image', $image);
        $stmt->bindParam(':description', $description);
        $stmt->execute();
    }
}



//chatGPS written code
    // public function addBook($title, $author, $year, $image, $description) {
    //     try {
    //         if ($this->dbConnection->dbConn != null) {
    //             $this->dbConnection->dbConn->beginTransaction();
    
    //             // Check if the author exists or insert if not
    //             $sql = 'INSERT INTO authors (name) VALUES (:name) ON DUPLICATE KEY UPDATE author_id = LAST_INSERT_ID(author_id)';
    //             $stmt = $this->dbConnection->dbConn->prepare($sql);
    //             $stmt->bindParam(':name', $author);
    //             $stmt->execute();
    
    //             // Retrieve the author ID
    //             $authorId = $this->dbConnection->dbConn->lastInsertId();
    
    //             // Insert the book
    //             $sql = 'INSERT INTO books (title, author_id, publication_year, image, description) VALUES (:title, :author_id, :year, :image, :description)';
    //             $stmt = $this->dbConnection->dbConn->prepare($sql);
    //             $stmt->bindParam(':title', $title);
    //             $stmt->bindParam(':author_id', $authorId);
    //             $stmt->bindParam(':year', $year);
    //             $stmt->bindParam(':image', $image);
    //             $stmt->bindParam(':description', $description);
    //             $stmt->execute();
    
    //             $this->dbConnection->dbConn->commit();
    //         }
    //     } catch (PDOException $e) {
    //         // Handle database errors
    //         $this->dbConnection->dbConn->rollBack();
    //         // Log or display the error
    //         echo 'Error: ' . $e->getMessage();
    //     }
    // }
    
    public function removeBook($id){
        $sql = ('DELETE FROM books WHERE book_id = :id');
        $stmt = $this->dbConnection->dbConn->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }


    public function addUser($user, $email, $pass, $admin){
        if ($this->dbConnection->dbConn != null){
            $sql = 'INSERT INTO users (is_admin, name, email, password) VALUES (:admin, :username, :email, :password)';
            $stmt = $this->dbConnection->dbConn->prepare($sql);
            $stmt->bindParam(':admin', $admin);
            $stmt->bindParam(':username', $user);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $pass);
            $stmt->execute();
        } else {
            return "ERROR: Connection is null";
        }
    }
    



    function __destruct() 
    {
        $this->dbConnection->dbConn = null;
    }


}