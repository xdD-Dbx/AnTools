import { deleteSync } from 'del';
import zipPlugin from "gulp-zip";

export const zip = () => {
	deleteSync(`./${app.path.rootFolder}.zip`);
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "ZIP",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(zipPlugin(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest('./'));
}
