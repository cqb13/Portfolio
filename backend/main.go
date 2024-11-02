package main

import (
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"net/http"
	"os"
)

func main() {
	router := gin.Default()
	router.GET("/send", processEmail)
	router.Run() // listen and serve on 0.0.0.0:8080
}

func processEmail(context *gin.Context) {
	firstName := context.Query("firstName")
	lastName := context.Query("lastName")
	email := context.Query("email")
	message := context.Query("message")

	if firstName == "" || lastName == "" || email == "" || message == "" {
		context.JSON(http.StatusBadRequest, gin.H{
			"error":   "Missing required parameters. Please provide firstName, lastName, email, and message.",
			"example": "/send?firstName=John&lastName=Doe&email=johndoe@example.com&message=Hello%20World",
		})
		return
	}

	if len(firstName) >= 50 {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": "Last Name length exceeds the maximum limit of 50 characters.",
		})
		return
	}

	if len(lastName) >= 50 {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": "Last Name length exceeds the maximum limit of 50 characters.",
		})
		return
	}

	if len(email) >= 100 {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": "Email length exceeds the maximum limit of 100 characters.",
		})
		return
	}

	if len(message) >= 5000 {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": "Message length exceeds the maximum limit of 5000 characters.",
		})
		return
	}

	err := sendEmail(firstName, lastName, email, message)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"message": "Email sent successfully!",
	})
}

func sendEmail(firstName string, lastName string, email string, message string) error {
	fmt.Printf("Sending email from %v %v (%v)\n%v\n", firstName, lastName, email, message)

	err := godotenv.Load(".env.local")
	if err != nil {
		return errors.New("Failed to load credentials")
	}

	emailServiceID := os.Getenv("EMAIL_SERVICE_ID")
	emailTemplateID := os.Getenv("EMAIL_TEMPLATE_ID")
	emailUserID := os.Getenv("EMAIL_USER_ID")

	if emailServiceID == "" || emailTemplateID == "" || emailUserID == "" {
		return errors.New("One or more credentials is missing")
	}

	fmt.Println(emailServiceID)
	fmt.Println(emailTemplateID)
	fmt.Println(emailUserID)

	return nil
}
