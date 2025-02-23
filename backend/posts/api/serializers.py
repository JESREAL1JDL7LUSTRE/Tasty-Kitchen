from rest_framework.serializers import ModelSerializer
from ..models import Post

class PostSerializers(ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content')