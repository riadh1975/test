from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', include('base.urls.product_urls')),
    path('api/users/', include('base.urls.user_urls')),
    path('api/orders/', include('base.urls.order_urls')),
    # المسار الخاص بـ manifest.json يجب وضعه في النهاية
    path('manifest.json', TemplateView.as_view(template_name='manifest.json', content_type='application/json')),
    path('', TemplateView.as_view(template_name='index.html')),
]

# إضافة المسارات الثابتة
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
