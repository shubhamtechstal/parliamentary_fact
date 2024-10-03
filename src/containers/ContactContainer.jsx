import { Box, Divider, TextField, Button, Grid, Container } from '@mui/material';
import Text from 'components/common/Text';
import '../App.css';
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';

export default function ContactContainer() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const data = [
    "Parliamentary Fact is owned by Raygain Technology Pvt. Ltd. For more information,",
    "Contact Our Newsroom - Have a suggestion for us or feedback on a story or editorial project or have a story idea, you can work with us freelance and create articles, videos etc. on issues that interest you. Send your story ideas to- ",
    `<a href ="mailto:team@parliamentaryfact.com">team@parliamentaryfact.com</a>`,
    `<a href ="mailto:editor@parliamentaryfact.com">editor@parliamentaryfact.com</a>`,
    "Subject to legal advice where appropriate, we promptly acknowledge and correct any serious factual errors. Any corrections are notified at the bottom of the article. If removal is required, an explanation is provided as to why.",
    `See something that is not right? You can contact our Grievance Officer <a href="mailto:at-grievance@parliamentaryfact.com">at-grievance@parliamentaryfact.com</a>`,
  ];

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <Box
      className="aboutContainer"
      sx={{ display: 'flex', margin: '2rem', gap: '2rem' }}
    >
      <Box
        className="aboutTabVal privacytabVal"
        sx={{
          alignSelf: 'flex-start',
          position: 'sticky',
          top: '2rem',
          marginLeft: '1rem',
          gap: '1rem',
        }}
      >
        <Box>
          <Text
            sx={{
              color: '#000',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            text={"Contact Us"}
          />
          <Divider sx={{ marginTop: '8px' }} />
        </Box>
      </Box>

      <div style={{ background: 'rgba(0, 0, 0, 0.12)', width: '2px' }}></div>
      <Box sx={{display:'flex',flexDirection:'column',gap:'1rem'}}>
      <Box sx={{ alignSelf: 'center', borderBottom: '2px solid rgba(0, 0, 0, 0.12)', padding: '0 1rem' }}>
            <Text sx={{ fontWeight: 'bold', fontSize: '1.8rem' }} text={"Contact us"} />
          </Box>
<Box sx={{display:'flex'}}>
      <Box>
        <Box
          className="aboutContent"
          sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {data.map((val, index) => (
            <Text
              key={index}
              sx={{ color: '#767676' }}
              text={parse(val)}
            />
          ))}
        </Box>

        <Box sx={{ marginTop: '1rem' }}>
          <Text
            sx={{ color: '#000', fontWeight: 'bold' }}
            text={"Head Office and Mailing Address:"}
          />
          <Text sx={{ color: '#767676' }} text={"Raygain Technology Pvt. Ltd"} />
          <Text sx={{ color: '#767676' }} text={"B-3/17, Block B 3, Safdarjung Enclave,"} />
          <Text sx={{ color: '#767676' }} text={"New Delhi, Delhi 110029"} />
        </Box>

        {/* Contact Form */}
      </Box>
      <Box sx={{ width: '50%', alignSelf: 'center' }}>
  <form onSubmit={handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          size="small"  
          margin="dense"  
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Organization Name"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          size="small" 
          margin="dense"  
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          size="small"  
          margin="dense"  
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Mobile"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          size="small"  
          margin="dense"  
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={3}  
          size="small"  
          margin="dense" 
          required
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          size="small"  
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  </form>
</Box>
</Box>
</Box>
    </Box>
  );
}
