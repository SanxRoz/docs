# Build your own AI

Published: Yes
Slug: build-your-AI

![https://cdn.discordapp.com/attachments/1082815363722522726/1086106919544029244/Just_Ask_ME.png](https://cdn.discordapp.com/attachments/1082815363722522726/1086106919544029244/Just_Ask_ME.png)

## What is this about?

I'm Santiago, the founder of mndhv.

I created this project to show you how to build with AI, how to use OpenAI API, embeddings, fine-tuning, stable diffusion, inpainting, and other models.

This isn't like a coding course or a bootcamp; it's more like a journal where I create content every week and upload projects for you to play around with AI and coding while you learn. Everything is fully open-source, which is cool.

Feel free to jump between modules, copy the code, or fork the repository from GitHub.

If you need help or have questions, just reach out to me on Twitter **[@SanxRoz](https://twitter.com/SanxRoz)**.

What do you need to start? You don't have to be a senior developer to follow this. Throughout the journey, I'll show you how to progress and what details to adjust. However, you should know the basics of programming. Knowing JS, React, and Python will help you a lot.

Remember, if you don't know something, your friend ChatGPT is always here to help. He understands the code better than anyone

## Everything is Open-Source

Everything you'll find here is free and open-source. Wondering how we make money from this project? Well, we haven't figured that out yet. We're still thinking about how to monetize the project.

If you find any errors in the content or in a repository, you can contact me [@SanxRoz](https://twitter.com/SanxRoz) or create an issue on Github.

AI is advancing rapidly, and I'm not as fast. I need to take breaks and grab a drink, which is why if you want to contribute and support this project, you're welcome to! We appreciate all the support.

Now, let's start building!

[📬 Clone the repo here!](https://www.notion.so/Clone-the-repo-here-9d8f5afb77904f7ba16004310aeaf09f?pvs=21)

# Let's dive into AI!

In this lab, we'll focus on how to use the OpenAI API and how to get started with prompts. In future drafts and labs, we'll delve deeper into embeddings and fine-tuning.

Let's start playing with AI and learn along the way.

The best way to practice your prompts is on **[ChatGPT](https://chat.openai.com/chat)** or in the **[Playground](https://platform.openai.com/playground)**. So the first thing you need is an OpenAI account. Once you have it, you'll receive $5 in credit, which will allow you to play with all the models and host an application for a while.

Keep in mind that ChatGPT is based on the GPT-3.5-turbo model, which is the most advanced model we have access to via its API (until GPT-4 is released).

Creating a good prompt takes time, so don't be afraid to experiment and tweak it to get the results you want. But don't expect perfect results; create your prompt and move on.

When you enter OpenAI Playground, you'll see something like this:

- On system section, we can assign a specific role to our AI assistant
- User,is where you add your prompt
- On Assistant, you’ill see the AI's response

![https://cdn.discordapp.com/attachments/1082815363722522726/1086106938728783914/Frame_8.png](https://cdn.discordapp.com/attachments/1082815363722522726/1086106938728783914/Frame_8.png)

Make sure you're in Chat mode, where you'll find the GPT-3.5-turbo model.

Take your time to test your prompts and create recipes, codes, tips, and even ask about your purpose in life. The limit is your creativity. Have fun!

Here are some examples to get you started!

```python
Create a story where a dog becomes the ruler of a kingdom
Create a fictional conversation between two animals about their day
Write a rap about your favorite video game and all the funny glitches or bugs that you have encountered.
```

Later on, we will review better prompting techniques, but as we've seen, with a simple prompt, we can do amazing things!

## **Let's build an AI App**

Just Ask Me is a web app built using Python for the backend and HTML, CSS, and JS for the frontend. This is the simplest way to create a web app and keep your keys safe.

Why Python? Because it's an easy and fast way to work with AI.

The app is based on three main files: 

- index.py for the backend
- home.html for the structure
- style.css for the styling.

Let's focus on index.py — 

```python
from flask import Flask, render_template, request, jsonify
import requests
import openai

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('./home.html')

@app.route('/submit', methods=['POST'])
def submit():

    open_ai_cookie = request.cookies.get("not-api-cookie")

    if not open_ai_cookie:
        return jsonify({'message': 'No OpenAI key, check https://platform.openai.com/account/api-keys for your key'})
    else:
        try:
            openai.api_key = f"{open_ai_cookie}"
            completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": f"{request.json['inputValue']}"}])
            return jsonify({'message': completion.choices[0].message.content})
        except requests.exceptions.RequestException as err:
            print('Something went wrong:', err)
            return jsonify({'message': 'Something went wrong'}), 500

if __name__ == '__main__':
    app.run(debug=True)
```

This is a simple code to receive, process, and send data with ChatGPT.

We are going to modify this code to use your private key.

Create a **`.env`** file (**[Replit](https://replit.com/talk/ask/How-to-use-environment-variables-with-Python/141674)** or **[Codesandbox](https://codesandbox.io/docs/learn/environment/secrets)**).

Name your variable **`OPEN_AI_KEY="..."`** and add your key.

Import the **`os`** package.

Change this line **`open_ai_cookie = request.cookies.get("not-api-cookie")`** to this **`open_ai_cookie = os.environ.get('OPEN_AI_KEY')`**.

Congratulations! You now have your API key secured.

You can also customize your prompt! In this case, we have the most basic application we can have.

We send the user's input directly to the model and we its response.

But, we can make this model much more specialized. How? By giving it a role as a world-class debugger, like this:

```python
messages=[{"role": "system", "content": "You are a worldclass code debugger"},
					{"role": "user", "content": f"{request.json['inputValue']}"}])
```

Once you have your model ready, let's move to HTML and remove some lines of code!!

```python
<div class="text-input">
<input id="submit-openai-key" type="password" class="text-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your OpenAI API KEY" id="name">
<buttom onclick="hideOpenAIKey()" type="submit" id="send-open" value="Save" class="submit-button w-button">Save</buttom>
</div>
```

Now that we have saved our API key in our .env file, we no longer need to add it with the input. Therefore, it's better to remove it.

We are now ready to run it.

Running it locally is easy!

```bash
# Enter to api folder
cd api

# Run the index code
python index.py
```

Now it should be running on **[http://localhost:5000/](http://localhost:5000/)**

[**🎉 Want to integrate it into your business?**](https://www.notion.so/Want-to-integrate-it-into-your-business-4f92bd6586754fd0aa09925203a0dc74?pvs=21)