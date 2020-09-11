<script context="module">
    // необязательная функция preload принимает объект
    // `{ path, params, query }` и превращает его в
    // данные, которые надо отрисовать на странице
    export async function preload(page, session) {
        // у нас есть доступ к параметру `slug`, потому что
        // файл называется [slug].html
        const {id} = page.params;

        const res = await this.fetch(`game/${id}.json`);
        const data = await res.json();
        return {game: data, id};
    }
</script>


<script>
    import Youtube from "../../components/Youtube.svelte";
    import Key from "../../components/Key.svelte";
    import {shuffle} from "../../utils/shuffle";

    export let game, id;
    let blockVideo = false;
    let song = {}
    let started = false
    let currentTime = 0
    let userAnswer

    // $:onGameChange(game)
    //
    // function onGameChange(game) {
    //     song = game.songs[0]
    // }

    $:processGame(currentTime)

    function processGame(currentTime) {
        let tempSong = game.songs.find(song => {
            if (currentTime >= song.guess[0] && currentTime <= song.answer[1]) {
                return true
            }
            return false
        })
        if (!tempSong) return
        if (tempSong.id !== song.id) {
            song = {...tempSong, answers: shuffle(tempSong.answers)}
            userAnswer = undefined
        }
        if (song.id && currentTime >= song.answer[0] && currentTime <= song.answer[1]) {
            if (!userAnswer) userAnswer = false
        }
    }

    function videoStateChange({detail}) {
        if (detail.data === 1) {
            blockVideo = true
        }
    }

</script>

{#if started}
    <div class="container py-5">
        <div class="row">
            <div class="col-12">
                <div class="wrap">
                    {#if blockVideo}<div class="block"></div>{/if}
                    <div class="inner">
                        <Key key="{game.yt_id}">
                            <Youtube on:timeupdate={({detail}) => currentTime = detail}
                                     on:StateChange={videoStateChange} key="{game.yt_id}" height="100%" width="100%"
                                     videoId="{game.yt_id}"/>
                        </Key>
                    </div>
                </div>
            </div>
            {#if song.id}
                {#if userAnswer === undefined}
                    {#each song.answers as answ}
                        <div class="col-md-6 mt-3">
                            <button on:click={() => userAnswer = answ} class="btn btn-secondary btn-block btn-lg">{answ}</button>
                        </div>
                    {/each}
                {:else}
                    {#if userAnswer === song.rightAnswer}
                        <div class="col-md-6 mx-auto mt-3">
                            <div class="alert alert-success">Правильный ответ</div>
                        </div>
                        <div class="w-100"></div>
                    {:else}
                        <div class="col-md-6 mx-auto mt-3">
                            <div class="alert alert-danger">Неправильный ответ</div>
                        </div>
                        <div class="w-100"></div>
                    {/if}
                {/if}
            {/if}
            <div class="col-auto mt-3 mx-auto"><a rel=prefetch href="/game/{Number(id) + 1}">Следующий</a></div>
        </div>
    </div>
{:else}
    <div class="container py-5">
        <div class="row h-100 py-5 justify-content-center align-items-center">
            <div class="col-md-6">
                <button on:click={() => started = true} class="btn btn-secondary btn-block btn-lg">Начать!</button>
            </div>
        </div>
    </div>
{/if}


<style type="text/scss">
  .wrap {
    position: relative;
    padding-top: 56.25%;
    width: 100%;
  }

  .inner {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;

    &:global {
      .yt-component {
        height: 100%;
      }
    }
  }

  .block {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1000;
  }
</style>