package datum_nar;

import java.awt.EventQueue;
import java.util.Date;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.security.Timestamp;
import java.text.FieldPosition;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.awt.event.ActionEvent;
import java.time.Duration;
import java.time.LocalDateTime;
import javax.swing.JTextArea;

public class MainFrame extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private JTextField textField;
	private JTextField textField_1;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					MainFrame frame = new MainFrame();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public MainFrame() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));

		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblNewLabel = new JLabel("New label");
		lblNewLabel.setBounds(190, 10, 70, 15);
		contentPane.add(lblNewLabel);
		
		JLabel lblNarodenie = new JLabel("cas");
		lblNarodenie.setBounds(45, 51, 108, 15);
		contentPane.add(lblNarodenie);
		
		textField = new JTextField();
		textField.setBounds(39, 78, 114, 19);
		contentPane.add(textField);
		textField.setColumns(10);
		
		JLabel lblCas = new JLabel("cas:");
		lblCas.setBounds(12, 209, 70, 15);
		contentPane.add(lblCas);
		
		JLabel lblTime = new JLabel("time");
		lblTime.setBounds(12, 236, 305, 15);
		contentPane.add(lblTime);
		
		JLabel lblDatum = new JLabel("datum");
		lblDatum.setBounds(49, 117, 70, 15);
		contentPane.add(lblDatum);
		
		JTextArea textArea = new JTextArea();
		textArea.setBounds(332, 38, 106, 213);
		contentPane.add(textArea);
		
		textField_1 = new JTextField();
		textField_1.setBounds(45, 156, 114, 19);
		contentPane.add(textField_1);
		textField_1.setColumns(10);
		
		JButton btnVypocitat = new JButton("vypocitat");
		btnVypocitat.addActionListener(new ActionListener() {
			@SuppressWarnings("deprecation")
			public void actionPerformed(ActionEvent arg0) {
				
						
				Date date = new Date();
				System.out.println(date.getMonth());
				lblTime.setText(date.toString());
				System.out.println(date);
				String original_datum = textField_1.getText();
				System.out.println(original_datum);
				
				String original_time = textField.getText();
//				original_time = "8:42:11";
				String[] sliced_time = original_time.split(":");
				
				String hours = sliced_time[0];
				String minutes = sliced_time[1];
				String seconds = sliced_time[2];
				
				
//				original_datum="4.3.2025";
				String[] sliced_datum = original_datum.split("\\.");
					
				String day = sliced_datum[0];
				String month = sliced_datum[1];
				String year = sliced_datum[2];
				
				LocalDateTime endDateTime = LocalDateTime.of(2025, date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
				
				lblTime.setText(endDateTime.toString());
				
				
//				simpleDateFormat.format(now, stringBuffer, new FieldPosition(0));
				LocalDateTime startDateTime = LocalDateTime.of(Integer.valueOf(year), Integer.valueOf(month), Integer.valueOf(day), Integer.valueOf(hours), Integer.valueOf(minutes), Integer.valueOf(seconds));  // Oct 5, 2021, 9:30:00
				System.out.println(startDateTime.toString());
//				LocalDateTime endDateTime = LocalDateTime.of(2021, 10, 5, 17, 45, 30);   // Oct 5, 2021, 17:45:30
				System.out.println(startDateTime.getHour());
				System.out.println(endDateTime.getHour());

				Duration duration = Duration.between(endDateTime, startDateTime);
				long total_seconds_long = duration.getSeconds();
				int total_seconds = (int) total_seconds_long;
				int Ayears = total_seconds / 31536000;
				
				int Amonths = (total_seconds % 31536000) / 2628288;
				
				int Adays = (total_seconds % 2628288) / 86400;
				
				int Ahours = (total_seconds % 86400) / 3600;
				int Aminutes = (total_seconds % 3600) / 60;
				int Aseconds = (total_seconds % 60);
				
				String result_string = "years: " + String.valueOf(Ayears) + "\n" + "months: " + String.valueOf(Amonths) + "\n" + "days: " + String.valueOf(Adays) + "\n" + "hours: " + String.valueOf(Ahours) + "\n" +  "minutes: " + String.valueOf(Aminutes) + "\n" + "seconds: " + String.valueOf(Aseconds);
				
				textArea.setText(result_string.replace("-",""));
				
				
				
				
				
				
				
				

				
//				Duration diff = Duration.between(d1.atStartOfDay(), d2.atStartOfDay());
				
			}
		});
		btnVypocitat.setBounds(210, 123, 117, 25);
		contentPane.add(btnVypocitat);
		
		
		
		
	}
}