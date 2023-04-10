from PIL import Image, ImageDraw, ImageFont
import random
import io
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib import messages


@login_required(login_url='login')
def dashboard(request):
    messages.success(request, 'login Sucessfully')
    return render(request, 'main.html')


def home(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        log = authenticate(request, username=username, password=password)

        if log is not None:
            login(request, log)
            return redirect('dashboard')
        else:
            messages.error(request, 'Invalid username or password')

    if request.user.is_authenticated:
        return redirect('dashboard')
    else:
        return render(request, 'index.html')


def log_out(request):

    if request.method == 'POST':
        logout(request)
        messages.success(request, 'logout Successfully')
        return redirect('login')
    else:
        return redirect('dashboard')


def my_view(request):
    context = {
        'user': request.user
    }
    return render(request, 'my_template.html', context)


def generate_profile_image(request):

    # Get user's first and last name
    first_name = request.user.first_name
    last_name = request.user.last_name

    bg_color = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))

    # Check the brightness of the background color and set the font color accordingly
    brightness = (299 * bg_color[0] + 587 * bg_color[1] + 114 * bg_color[2]) / 1000
    if brightness < 128:
        font_color = (255, 255, 255)  # White font color for dark background
    else:
        font_color = (0, 0, 0)  # Black font color for light background

    size = random.randint(80, 80)
    image = Image.new('RGBA', (size, size), bg_color)

    # Add a rectangle to act as a background
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, size, size), fill=bg_color)

    # Draw the user's initials on the image with the appropriate font color
    initials = first_name[0].upper() + last_name[0].upper()  # First letter of first and last name
    text_size = draw.textsize(initials, font=ImageFont.truetype('arial.ttf', 18))
    text_x = (size - text_size[0]) // 2
    text_y = (size - text_size[1]) // 2
    draw.text((text_x, text_y), initials, fill=font_color, font=ImageFont.truetype('arial.ttf', 18))

    # Create a circular mask for the image
    mask = Image.new('L', (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)

    # Apply the mask to the image
    image.putalpha(mask)

    # Save the image to a byte stream
    byte_stream = io.BytesIO()
    image.save(byte_stream, format='PNG')
    byte_stream.seek(0)

    # Return the image as an HTTP response
    return HttpResponse(byte_stream.getvalue(), content_type='image/png')

