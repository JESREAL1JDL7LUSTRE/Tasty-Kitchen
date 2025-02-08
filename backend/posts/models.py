from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  # ✅ Correct usage

    
    def __str__(self):
        return f"Post {self.title}"