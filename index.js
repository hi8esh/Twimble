import { tweetsData } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'


document.addEventListener('click', function(e){
    if (e.target.dataset.replies){
        repliesClickHandler(e.target.dataset.replies)
    }
    else if (e.target.dataset.like){
        likeClickHandler(e.target.dataset.like)
    }
    else if (e.target.dataset.retweet){
        retweetClickHandler(e.target.dataset.retweet)
    }
    else if (e.target.id === 'tweet-btn'){
        tweetBtnClickHandler()
    }
    else if (e.target.dataset.reply){
        replyBtnClickHandler(e.target.dataset.reply)
    }
})

function repliesClickHandler(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function likeClickHandler(tweetId){
    const targetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    if(!targetObj.isLiked){
        targetObj.likes++
        console.log(targetObj.likes)
    }
    else{
        targetObj.likes--
    }
    targetObj.isLiked = !targetObj.isLiked
    render()
}

function retweetClickHandler(tweetId){
    const targetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    if (!targetObj.isRetweeted){
        targetObj.retweets++
    }
    else{
        targetObj.retweets--
    }
    targetObj.isRetweeted = !targetObj.isRetweeted
    render()
}

function tweetBtnClickHandler(){
    const tweetInput = document.getElementById('tweet-input')
    console.log(tweetInput.value)

    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Sinchan`,
            profilePic: `./images/shinchan1.jpg`,
            likes: 0,
            retweets: 0,
            tweetText: `${tweetInput.value}`,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
        render()
        tweetInput.value = ''
    }
}

function replyBtnClickHandler(tweetId){
    const targetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    const replyInput = document.getElementById('reply-input')
    console.log(replyInput.value)
    if(replyInput.value){
        targetObj.replies.unshift({
                handle: `@Sinchan`,
                profilePic: `./images/shinchan1.jpg`,
                tweetText: `${replyInput.value}`,
        })
        render()
        replyInput.value = ''
        document.getElementById(`replies-${tweetId}`).classList.toggle('hidden')
    }
}

function render(){
    const feed = document.getElementById('feed')
    let feedData = ``

    tweetsData.forEach(function(tweet){

        let likeIconClass = ''

        if (tweet.isLiked){
            likeIconClass = 'liked'
        }

        let retweetIconClass = ''

        if (tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }

        let repliesHtml = `
                            <div class="add-reply">
                                <div class="reply-input-area">
                                    <img src="./images/shinchan1.jpg" alt="profile pic" class="profile-pic">
                                    <div class="reply-layout">
                                        <textarea placeholder="Add a reply" id="reply-input" class="reply-input"></textarea>
                                        <button id="reply-btn" class="reply-btn" data-reply="${tweet.uuid}">Reply</button>
                                    </div>
                                </div>
                            </div>
                          `

        if (tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml += `
                                <div class="tweet-reply">
                                    <div class="tweet-inner">
                                        <img src="${reply.profilePic}" class="profile-pic">
                                        <div>
                                            <p class="handle">${reply.handle}</p>
                                            <p class="tweet-text">${reply.tweetText}</p>
                                        </div>
                                    </div>
                                </div> 
                               `
            })
        }

        feedData += `
                    <div class="tweet">
                        <div class="tweet-inner">
                            <img src="${tweet.profilePic}" class="profile-pic">
                            <div>
                                <p class="handle">${tweet.handle}</p>
                                <p class="tweet-text">${tweet.tweetText}</p>
                                <div class="tweet-details">
                                    <span class="tweet-detail">
                                        <i class="fa-regular fa-comment-dots" data-replies="${tweet.uuid}"></i>
                                        ${tweet.replies.length}
                                    </span>
                                    <span class="tweet-detail">
                                        <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweet.uuid}"></i>
                                        ${tweet.likes}
                                    </span>
                                    <span class="tweet-detail">
                                        <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${tweet.uuid}"></i>
                                        ${tweet.retweets}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="hidden" id="replies-${tweet.uuid}">
                            ${repliesHtml}
                        </div>
                    </div>
                    `
    })
    feed.innerHTML = feedData
}

render()