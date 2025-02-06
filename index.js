import { tweetsData } from './data.js'
console.log(tweetsData)


function render(){
    const feed = document.getElementById('feed')
    let feedData = ``
    let repliesHtml = ``

    tweetsData.forEach(function(tweet){
        feedData += `
                    <div class="tweet">
                        <div class="tweet-inner">
                            <img src="${tweet.profilePic}" class="profile-pic">
                            <div>
                                <p class="handle">${tweet.handle}</p>
                                <p class="tweet-text">${tweet.tweetText}</p>
                                <div class="tweet-details">
                                    <span class="tweet-detail">
                                        <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                                        ${tweet.replies.length}
                                    </span>
                                    <span class="tweet-detail">
                                        <i class="fa-solid fa-heart" data-reply="${tweet.uuid}"></i>
                                        ${tweet.likes}
                                    </span>
                                    <span class="tweet-detail">
                                        <i class="fa-solid fa-retweet" data-reply="${tweet.uuid}"></i>
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