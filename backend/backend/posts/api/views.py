from rest_framework.viewsets import ModelViewSet
from ..models import Post
from .serializers import PostSerializers

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializers