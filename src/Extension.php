<?php namespace FlarumArabia;

use Flarum\Support\Extension as BaseExtension;
use Illuminate\Events\Dispatcher;
use Flarum\Events\RegisterLocales;
use Flarum\Events\BuildClientView;

class Extension extends BaseExtension
{
    public function listen(Dispatcher $events)
    {
        $events->listen(RegisterLocales::class, function (RegisterLocales $event) {
            $event->manager->addLocale('ar', 'Arabic');
            $event->addTranslations('ar', __DIR__.'/../locale/core.yml');
            $event->manager->addJsFile('ar', __DIR__.'/../locale/core.js');
            $event->manager->addConfig('ar', __DIR__.'/../locale/core.php');
            $event->addTranslations('ar', __DIR__.'/../locale/likes.yml');
            $event->addTranslations('ar', __DIR__.'/../locale/lock.yml');
            $event->addTranslations('ar', __DIR__.'/../locale/mentions.yml');
            $event->addTranslations('ar', __DIR__.'/../locale/pusher.yml');
            $event->addTranslations('ar', __DIR__.'/../locale/sticky.yml');
            $event->addTranslations('ar', __DIR__.'/../locale/subscriptions.yml');
            $event->addTranslations('ar', __DIR__.'/../locale/tags.yml');
        });
		
		$events->listen(BuildClientView::class, [$this, 'addAssets']);
    }
	
	public function addAssets(BuildClientView $event){
		 $event->forumAssets([
			__DIR__.'/../less/forum/extension.less'
		]);
	}
}
